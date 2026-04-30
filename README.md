# Task Manager Application

A Full Stack Task Management Application built with Spring Boot (Backend) and React + Vite (Frontend).

---

## Project Structure

```
task-manager-app/
├── backend/       -> Spring Boot REST API
├── frontend/      -> React + Vite UI
└── README.md      -> You are here
```

---

## Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Backend   | Java 17, Spring Boot 3.2, Spring Data JPA |
| Database  | MySQL 8                                 |
| API Docs  | Swagger (SpringDoc OpenAPI)             |
| Frontend  | React 18, Vite, Axios                   |

---

## Features

- Add new tasks with title and description
- View all tasks in a list
- Mark tasks as Completed
- Delete tasks
- Swagger API documentation

---

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### 2. Setup Database

Open MySQL Workbench and run:

```sql
CREATE DATABASE taskdb;
```

### 3. Start Backend

See backend/README.md for full steps.

- Open backend/ folder in Spring Tool Suite
- Update your MySQL password in application.properties
- Right-click TaskManagerApplication.java -> Run As -> Spring Boot App
- Runs at http://localhost:8080

### 4. Start Frontend

See frontend/README.md for full steps.

```bash
cd frontend
npm install
npm run dev
```

- Runs at http://localhost:5173

---

## Important URLs

| Service      | URL                                              |
|--------------|--------------------------------------------------|
| Frontend App | http://localhost:5173                            |
| Backend API  | http://localhost:8080                            |
| Swagger UI   | http://localhost:8080/swagger-ui/index.html      |

---

## API Endpoints Summary

| Method   | Endpoint      | Description       |
|----------|---------------|-------------------|
| POST     | /tasks        | Create a new task |
| GET      | /tasks        | Get all tasks     |
| GET      | /tasks/{id}   | Get task by ID    |
| PUT      | /tasks/{id}   | Update task       |
| DELETE   | /tasks/{id}   | Delete task       |

---

## Application Flow

```
React UI (port 5173)
      |
      |  Axios HTTP calls
      |
Spring Boot API (port 8080)
      |
      |  JPA queries
      |
MySQL Database (port 3306)
```

---

## Prerequisites

| Tool              | Version  | Download Link                                                                 |
|-------------------|----------|-------------------------------------------------------------------------------|
| Java JDK          | 17+      | https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html  |
| Spring Tool Suite | 4+       | https://spring.io/tools                                                       |
| Node.js           | 18+      | https://nodejs.org                                                            |
| MySQL             | 8+       | https://dev.mysql.com/downloads/installer/                                    |
| Git               | Latest   | https://git-scm.com/downloads                                                 |

---

## Author

- Name: Shyamsundar Dhangar
- GitHub: https://github.com/shyamsundar-24-1
