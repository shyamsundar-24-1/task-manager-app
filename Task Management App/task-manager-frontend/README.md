# Task Manager - Frontend

React 18 frontend built with Vite, connected to the Spring Boot backend via Axios.

---

## Folder Structure

```
frontend/
└── src/
    ├── components/
    │   ├── TaskForm.jsx      -> Add new task form
    │   └── TaskList.jsx      -> Display, complete, delete tasks
    ├── services/
    │   └── taskService.js    -> All Axios API calls
    ├── App.jsx               -> Root component, state management
    ├── App.css               -> All styles
    └── main.jsx              -> Entry point
```

---

## Prerequisites

- Node.js 18+
- npm 9+
- Backend must be running on http://localhost:8080

---

## How to Run

Open a terminal inside the frontend/ folder and run these commands:

### Step 1 - Install all dependencies

```bash
npm install
```

### Step 2 - Install Axios

```bash
npm install axios
```

### Step 3 - Start development server

```bash
npm run dev
```

App runs at: http://localhost:5173

---

## Important Note

The frontend talks to the backend at http://localhost:8080.

Make sure the backend is running first before opening the frontend in the browser.

If your backend runs on a different port, update this line in src/services/taskService.js:

```js
const BASE_URL = 'http://localhost:8080/tasks';
```

---

## Component Breakdown

### App.jsx
- Root component of the entire application
- Holds the tasks state array using useState
- Fetches all tasks on page load using useEffect
- Passes fetchTasks as a prop so child components can trigger a refresh after any action

### TaskForm.jsx
- Controlled form with title and description input fields
- On submit: calls createTask() API, clears the form, and refreshes the task list
- Shows loading state on the button while the API call is in progress
- Prevents empty task submission using required and trim() check

### TaskList.jsx
- Renders all tasks as individual cards
- Each card shows title, description, and a status badge
- Mark Complete button - only visible for PENDING tasks
- Delete button - always visible for all tasks
- Shows a friendly empty message if no tasks exist yet

### taskService.js
- Central place for all API calls
- Uses Axios for HTTP requests
- Exports four functions: getAllTasks, createTask, updateTask, deleteTask

---

## Available Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| npm run dev       | Start development server           |
| npm run build     | Build for production               |
| npm run preview   | Preview production build locally   |

---

## Backend Connection

This frontend connects to the following backend URLs:

| Purpose    | URL                                            |
|------------|------------------------------------------------|
| Base API   | http://localhost:8080/tasks                    |
| Swagger UI | http://localhost:8080/swagger-ui/index.html    |

---
---

## Dependencies Used

| Package    | Purpose                          |
|------------|----------------------------------|
| react      | UI library                       |
| react-dom  | Render React to the browser      |
| axios      | HTTP client for API calls        |
| vite       | Build tool and dev server        |
