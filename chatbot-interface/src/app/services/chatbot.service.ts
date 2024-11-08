import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private apiUrl = 'http://127.0.0.1:5000/chatbot'; 
  constructor(private http: HttpClient) {}

  
  sendMessage(message: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { message }).pipe(
      catchError(error => {
        console.error('Error occurred:', error); 
        throw error; 
      })
    );
  }
}
 