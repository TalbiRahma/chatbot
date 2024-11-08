# Chatbot Project with Angular UI

This project is a chatbot application where the backend is built using Flask, and the frontend is built with Angular. The chatbot responds to user input in both English and French by detecting the language and providing a relevant answer from pre-defined questions and answers stored in a JSON file.

## Features

- **Multilingual Support**: The chatbot detects if the input is in English or French.
- **Natural Language Processing**: spaCy is used to process user input and match it with the closest pre-defined question.
- **Frontend (Angular UI)**: Provides a user-friendly interface to interact with the chatbot.
- **Backend (Flask API)**: A REST API that handles communication with the chatbot logic.
- **CORS Support**: The Flask server allows cross-origin requests from the Angular frontend.

---

## Installation

### Backend Installation (Flask)

Follow the instructions from the **Backend Installation** section in the previous README to set up the Flask server.

### Frontend Installation (Angular)

1. **Clone the repository**:

    ```bash
    git clone <your-repository-url>
    cd <your-angular-project-folder>
    ```

2. **Install Angular CLI** (if not already installed):

    ```bash
    npm install -g @angular/cli
    ```

3. **Install the required dependencies**:

    Navigate to your Angular project folder and run:

    ```bash
    npm install
    ```

4. **Update the environment configuration**:

    Open the `src/environments/environment.ts` file in your Angular project and set the API URL to the Flask server's address:


5. **Run the Angular application**:

    Start the Angular development server:

    ```bash
    ng serve
    ```

    The frontend will be available at `http://localhost:4200`.

---

### Running Both Servers

Make sure both Flask and Angular servers are running:

- Flask server: `http://localhost:5000`
- Angular server: `http://localhost:4200`

---

## Usage

### Frontend

- Open `http://localhost:4200` in your browser.
- You can send a message to the chatbot by typing in the input box and clicking the send button.
- The Angular frontend will send the user input to the Flask backend, and the chatbot will respond with an appropriate answer.
