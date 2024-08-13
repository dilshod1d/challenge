# Django and React Authentication with JWT and HTTP-Only Cookies

This project showcases a user authentication system developed using Django and React. The system supports user registration, login, logout, and user data retrieval. Authentication is managed through JSON Web Tokens (JWT) and HTTP-only cookies, enhancing security. The frontend is styled with Bootstrap.

## Challenge Completion

I completed the challenge of integrating user authentication with Ethereum mainnet functionality. This implementation includes the following features:

- **Ethereum Wallet Integration**: Added an input field for users to provide their Ethereum wallet address during registration. This address is stored in the database.
- **Balance Display**: After logging in, users can view the balance of their Ethereum wallet address, demonstrating the integration with the Ethereum mainnet.

## Project Structure

The project is organized into two main directories:

- `client`: Contains the React frontend application.
- `server`: Contains the Django backend application.

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites

Ensure the following are installed on your machine:

- Python 3.8 or higher
- Node.js v14.15.0 or higher
- npm 6.14.9 or higher

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Navigate into the project directory:
    ```bash
    cd your-repo-name
    ```

### Server Setup

1. Navigate to the `server` directory:
    ```bash
    cd server
    ```
2. Install Django and other dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the Django server:
    ```bash
    python manage.py runserver
    ```

### Client Setup

1. Navigate to the `client` directory:
    ```bash
    cd ../client
    ```
2. Install the client dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm start
    ```

The application will be accessible at `localhost:3000`. Ensure both the Django server and the React client are running simultaneously for full functionality.

## Key Features

- **User Registration**: Includes an input field for the user's Ethereum wallet address, which is saved to the database.
- **User Login**: Allows users to log in using their email and password.
- **Ethereum Wallet Balance**: Users can view their Ethereum wallet balance after logging in.

## Notes

- The application uses email for user identification instead of a traditional username.
- This project integrates with the Ethereum mainnet, providing real-time wallet balance functionality.

