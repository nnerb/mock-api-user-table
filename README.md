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

### `BACKEND.md`

```markdown
# Backend Setup

## Setup Instructions

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

## API Endpoints

- **GET `/api/users`**: Fetches a list of users.
- **GET `/api/users/:id`**: Fetches a user by ID.
- **GET `/api/products`**: Fetches a list of products.

