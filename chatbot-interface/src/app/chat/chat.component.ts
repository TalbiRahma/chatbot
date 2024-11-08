import { Component } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  userMessage: string = '';
  messages: Array<{ text: string, type: string }> = [];

  constructor(private chatbotService: ChatbotService) {}

  
  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ text: this.userMessage, type: 'user' });

      this.chatbotService.sendMessage(this.userMessage).subscribe(
        response => {
          console.log('Response from backend:', response); 
          if (response.message && Array.isArray(response.message)) {
           
            this.messages.push({ text: response.message.join(' '), type: 'bot' });
          } else {
            
            this.messages.push({ text: response.message, type: 'bot' });
          }
        },
        error => {
          console.error('Error:', error); 
          this.messages.push({ text: 'Error: Unable to get a response from the chatbot.', type: 'bot' });
        }
      );

      this.userMessage = '';  
    }
  }

}
