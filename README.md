# Portfolio 2.0

This project consists of a Django backend and a React (Vite) frontend.

## Prerequisites

- [ ] Python 3.x
- [ ] Node.js
- [ ] WSL (Windows Subsystem for Linux)

## How to Run

To run the project, you need to start both the backend and frontend servers. You can do this by opening two separate terminal instances.

### 1. Start the Backend Server

Open a terminal and navigate to the root directory of the project.

```bash
# Activate the virtual environment
source env/bin/activate

# Navigate to the backend directory
cd backend

# Run the Django development server
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`.

### 2. Start the Frontend Server

Open a **new** terminal (or split pane) and navigate to the root directory of the project.

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies for first time
npm install

# Run the frontend development server
npm run dev
```

The frontend application will be available at `http://localhost:5173` (or similar port).

## Project Structure

- `backend/`: Django project files
- `frontend/`: React application files
- `env/`: Python virtual environment
