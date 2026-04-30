# Task Manager Application

A Full Stack Task Management Application built with Spring Boot and React (Vite).

---

## Tech Stack

**Backend**
- Java 17
- Spring Boot 3.2
- Spring Data JPA
- MySQL Database
- Swagger (SpringDoc OpenAPI)

**Frontend**
- React 18
- Vite
- Axios

---

## Prerequisites

Make sure you have these installed:

| Tool | Version | Download |
|------|---------|----------|
| Java JDK | 17+ | https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html |
| Spring Tool Suite | 4+ | https://spring.io/tools |
| Node.js | 18+ | https://nodejs.org |
| MySQL | 8+ | https://dev.mysql.com/downloads/installer/ |

---

## Database Setup

1. Open MySQL Workbench
2. Run this command:

```sql
CREATE DATABASE taskdb;
```

---

## Backend Setup

1. Open **Spring Tool Suite**
2. Go to **File → Import → Existing Maven Project**
3. Select the `backend/` folder
4. Open `src/main/resources/application.properties`
5. Update your MySQL password:

```properties
spring.datasource.password=your_mysql_password
```

6. Right-click `TaskManagerApplication.java` → **Run As → Spring Boot App**
7. Backend runs at: `http://localhost:8080`
8. Swagger UI: `http://localhost:8080/swagger-ui/index.html`

---

## Frontend Setup

1. Open terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

2. Frontend runs at: `http://localhost:5173`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /tasks | Create a new task |
| GET | /tasks | Get all tasks |
| GET | /tasks/{id} | Get task by ID |
| PUT | /tasks/{id} | Update task |
| DELETE | /tasks/{id} | Delete task |

---

## Features

- Add new tasks with title and description
- View all tasks in a list
- Mark tasks as Completed
- Delete tasks
- REST API with Swagger documentation

---

## Project Structure

```
task-manager/
├── backend/
│   └── src/main/java/com/taskmanager/
│       ├── controller/    → TaskController.java
│       ├── entity/        → Task.java
│       ├── repository/    → TaskRepository.java
│       ├── service/       → TaskService.java
│       ├── config/        → SwaggerConfig.java
│       └── exception/     → GlobalExceptionHandler.java
├── frontend/
│   └── src/
│       ├── components/    → TaskForm.jsx, TaskList.jsx
│       ├── services/      → taskService.js
│       ├── App.jsx
│       └── main.jsx
└── README.md
```