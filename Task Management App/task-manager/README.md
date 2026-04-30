# Task Manager - Backend

REST API built with Spring Boot 3.2, Spring Data JPA, and MySQL.

---

## Folder Structure

```
backend/
└── src/
    └── main/
        ├── java/com/taskmanager/
        │   ├── TaskManagerApplication.java      -> Entry point
        │   ├── entity/
        │   │   └── Task.java                    -> Database entity
        │   ├── repository/
        │   │   └── TaskRepository.java          -> JPA repository
        │   ├── service/
        │   │   └── TaskService.java             -> Business logic
        │   ├── controller/
        │   │   └── TaskController.java          -> REST endpoints
        │   ├── config/
        │   │   └── SwaggerConfig.java           -> Swagger setup
        │   └── exception/
        │       └── GlobalExceptionHandler.java  -> Error handling
        └── resources/
            └── application.properties           -> App configuration
```

---

## Prerequisites

- Java JDK 17+
- Spring Tool Suite 4+
- MySQL 8+
- Maven (comes bundled with STS)

---

## Database Setup

1. Open MySQL Workbench
2. Connect to localhost with your root credentials
3. Run this query:

```sql
CREATE DATABASE taskdb;
```

Note: The tasks table is created automatically by Spring Boot on first run.

---

## Configuration

Open src/main/resources/application.properties and update:

```properties
# MySQL Connection
spring.datasource.url=jdbc:mysql://localhost:3306/taskdb?createDatabaseIfNotExist=true&useSSL=false&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD_HERE

spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server
server.port=8080
```

Replace YOUR_MYSQL_PASSWORD_HERE with your actual MySQL password.

---

## How to Run

1. Open Spring Tool Suite
2. Go to File -> Import -> Existing Maven Project
3. Browse and select the backend/ folder
4. Click Finish and wait for Maven to download dependencies
5. Right-click TaskManagerApplication.java
6. Select Run As -> Spring Boot App
7. Watch the Console - you should see:

```
Tomcat started on port(s): 8080
Started TaskManagerApplication in 3.x seconds
```

---

## API Endpoints

### Create Task

```
POST /tasks
Content-Type: application/json

Body:
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "PENDING"
}
```

### Get All Tasks

```
GET /tasks
```

### Get Task by ID

```
GET /tasks/{id}

Example: GET /tasks/1
```

### Update Task

```
PUT /tasks/{id}
Content-Type: application/json

Body:
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "status": "COMPLETED"
}
```

### Delete Task

```
DELETE /tasks/{id}

Example: DELETE /tasks/1
```

---

## Swagger API Documentation

After starting the backend, open this URL in your browser:

```
http://localhost:8080/swagger-ui/index.html
```

You can test all APIs directly from the browser without Postman.

### Steps to test in Swagger:

1. Click any endpoint (e.g. POST /tasks)
2. Click Try it out button
3. Fill in the request body
4. Click Execute
5. See the response below

---

## Database Verification

After running, verify in MySQL Workbench:

```sql
USE taskdb;
SHOW TABLES;         -- should show 'tasks'
SELECT * FROM tasks; -- shows all tasks
```

---

## Dependencies Used

| Dependency                            | Purpose                |
|---------------------------------------|------------------------|
| spring-boot-starter-web               | Build REST APIs        |
| spring-boot-starter-data-jpa          | Database ORM           |
| mysql-connector-j                     | MySQL JDBC driver      |
| lombok                                | Reduce boilerplate     |
| springdoc-openapi-starter-webmvc-ui   | Swagger UI             |
| spring-boot-starter-validation        | Input validation       |
