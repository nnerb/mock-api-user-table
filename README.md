# Mock API User Table

A React application that displays a table of mock user data fetched from an Express.js backend. Built using TypeScript, Vite for fast development, and Tailwind CSS for styling. Features a loading spinner to improve user experience while data is being fetched.

## Table of Contents

- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies for both the frontend and backend.

```shell
git clone https://github.com/your-username/mock-api-user-table.git
cd mock-api-user-table
```

## Backend Setup

### Setup Instructions

1. **Navigate to the `server` directory:**

    ```shell
    cd server
    ```

2. **Install the backend dependencies:**

    ```shell
    npm install
    ```

3. **Run the backend server in development mode:**

    ```shell
    npm run start:dev
    ```

    The backend server will be available at `http://localhost:3000`.

### API Endpoints

- **GET `/api/users`**: Fetches a list of users.
- **GET `/api/users/:id`**: Fetches a user by ID.
- **GET `/api/products`**: Fetches a list of products.

## Frontend Setup

### Setup Instructions

1. **Navigate to the `client` directory:**

    ```shell
    cd client
    ```

2. **Install the frontend dependencies:**

    ```shell
    npm install
    ```

3. **Run the frontend development server:**

    ```shell
    npm run dev
    ```

    The frontend application will be available at `http://localhost:5173`.

## Usage

Access the application by navigating to `http://localhost:5173` in your web browser. The frontend fetches and displays a table of mock user data from the Express backend. A loading spinner is displayed while the data is being fetched.

## Features

- Displays a table of mock user data.
- Features a loading spinner from `react-spinners`.
- Styled with Tailwind CSS for a modern and responsive design.

## Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, react-spinners
- **Backend**: Express.js
- **Development Tools**: Nodemon

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

### Fork the Project

1. Create your feature branch:

    ```shell
    git checkout -b feature/AmazingFeature
    ```

2. Commit your changes:

    ```shell
    git commit -m 'Add some AmazingFeature'
    ```

3. Push to the branch:

    ```shell
    git push origin feature/AmazingFeature
    ```

4. Open a pull request.

## License

MIT License

Copyright (c) 2024 Brenn Santiago

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



