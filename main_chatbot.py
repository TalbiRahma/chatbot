from flask_cors import CORS
from flask import Flask, request, jsonify
from chatbot import chatbot_logic, load_qa
from langdetect import detect


app = Flask(__name__)
CORS(app, origins=["http://localhost:4200"])


# File path for the intents JSON file
file_path = "intents.json"

# Load initial QA data from the JSON file
qa_data = load_qa(file_path)


# Route for the chatbot logic
@app.route('/chatbot', methods=['POST'])
def handle_chatbot():
    if request.method == 'POST':
        user_input = request.json['message']
        # Detect the language of the input
        try:
            detected_language = detect(user_input)
        # If detected language is not French or English, set it to English by default
            if detected_language not in ['fr', 'en']:
                detected_language = 'en'
        except Exception as e:
            detected_language = 'en' 
        # Call chatbot logic function to get response
        answer = chatbot_logic(user_input, qa_data,detected_language)
        
        response = {
            "message": answer, # Create a response dictionary with the chatbot's answer
        }
        return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
