# todo-ts
## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [API Instruction](#api-instruction)

## Introduction
This project is a task management application where you can create, view your todos and update their status as time goes by. 
- The "create task" button is disabled before all the fields are filled.
- Diverse colors are applied at task counters and task borders to manifest different status and priorities of tasks
- At the bottom of each listed task, there are a switch and a button to update task status to in progress and completed respectively
  
- And the change of creating and updating will be simultaneously synchronized in the task counters and list, which is achieved by React Context hook, allowing values to be passed into different layers of nested components, with no need to pass them layer by layer, working like a global variable.
- Express Validator was utilized to ensure the submitted request data conforms to expected formats and content, thereby improving the application's security and reliability.
### Technical Structure
Application front-end using - TypeScript with React, Material UI, React Query / Tanstack Query, and Context API. <br>
Application backend REST API using-  TypeScript with NodeJS, TypeORM, and MySql
### Final Version Display
<img width="1498" alt="截屏2024-06-09 22 41 08" src="https://github.com/SiMinus/todo-ts/assets/124517416/f4a975f9-9050-4f96-9f69-44b0f1e10024">


### Components Division
![截屏 2024-06-09 22 44 19](https://github.com/SiMinus/todo-ts/assets/124517416/dc8b6332-cda1-4c6f-a7c4-26429166083a)

## Getting Started
### Clone
```bash
git clone https://github.com/SiMinus/todo-ts.git
```

### Setting up for todo-api(back end)
```bash
cd todo-api
npm install
```
Make sure you have a MYSQL server set and running on your machine, in which you will create a database called todo

Configure .env file
```bash
PORT=<port number to be listened>
MYSQL_USER=root
MYSQL_PASSWORD=<your password>
MYSQL_DB=todo

```
Since the Entity was already created, the table will be automatically created due to the features of TypeORM after running:
```bash
npm run dev
```
### Setting up for todo-front(front end)
```bash
cd todo-front
npm install
```
## API Instruction
### GET http://localhost:3200/tasks
- Description: Retrieves a list of all tasks.
- Request Parameters: None.
- Content-Type: application/json
- Example Response:
```json
[
    {
      "id": "7cc6dd82-55cc-4e71-9dac-d35b9f1c699f",
      "title": "django",
      "date": "Fri May 10 2024 18:10:08 GMT+0100 (英国夏令时间)",
      "description": "game",
      "priority": "high",
      "status": "completed"
    },
    {
      "id": "9e8e1285-ff80-45fa-8418-1e9699c01d04",
      "title": "test",
      "date": "Sat May 04 2024 16:58:22 GMT+0100 (英国夏令时间)",
      "description": "test",
      "priority": "high",
      "status": "inProgress"
    }
  ]
  ```
### POST http://localhost:3200/tasks
- Description: Creates a new task.
- Request Parameters: None.
- Content-Type: application/json
- Example Response:
```json
[
    {
      "id": "7cc6dd82-55cc-4e71-9dac-d35b9f1c699f",
      "title": "django",
      "date": "Fri May 10 2024 18:10:08 GMT+0100 (英国夏令时间)",
      "description": "game",
      "priority": "high",
      "status": "completed"
    },
    {
      "id": "9e8e1285-ff80-45fa-8418-1e9699c01d04",
      "title": "test",
      "date": "Sat May 04 2024 16:58:22 GMT+0100 (英国夏令时间)",
      "description": "test",
      "priority": "high",
      "status": "inProgress"
    }
  ]
  ```
### PUT http://localhost:3200/tasks
- Description: Updates the completion status of a specific task.
- Request Parameters: None.
- Content-Type: application/json
- Example Response:
```json
[
    {
      "id": "7cc6dd82-55cc-4e71-9dac-d35b9f1c699f",
      "title": "django",
      "date": "Fri May 10 2024 18:10:08 GMT+0100 (英国夏令时间)",
      "description": "game",
      "priority": "high",
      "status": "completed"
    },
    {
      "id": "9e8e1285-ff80-45fa-8418-1e9699c01d04",
      "title": "test",
      "date": "Sat May 04 2024 16:58:22 GMT+0100 (英国夏令时间)",
      "description": "test",
      "priority": "high",
      "status": "inProgress"
    }
  ]
  ```


