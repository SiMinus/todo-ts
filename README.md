# todo-ts
## Introduction
This project is a task management application where you can create, view your todos and update their status as time goes by. 
- Diverse colors are applied at task counters and task borders to manifest different status and priorities of tasks
- At the bottom of each listed task, there are a switch and a button to update task status to in progress and completed respectively
  
- And the change of creating and updating will be simutaneously synchronized in the task counters and list, which is achieved by React Context hook, allowing values to be passed into different layers of nested components, with no need to pass them layer by layer, working like a global variable.
- Express Valiadator was utilized to ensure the submitted request data conforms to expected formats and content, thereby improving the application's security and reliability.
### Technical Structure: 
Application front-end using - TypeScript with React, Material UI, React Query / Tanstack Query, and Context API. <br>
Application backend REST API using-  TypeScript with NodeJS, TypeORM, and MySql

<img width="1498" alt="截屏2024-06-09 22 41 08" src="https://github.com/SiMinus/todo-ts/assets/124517416/f4a975f9-9050-4f96-9f69-44b0f1e10024">


## Components Division
![截屏 2024-06-09 22 44 19](https://github.com/SiMinus/todo-ts/assets/124517416/dc8b6332-cda1-4c6f-a7c4-26429166083a)



