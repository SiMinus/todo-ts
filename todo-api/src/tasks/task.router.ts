

import { taskController } from './task.controller';
import { Router} from 'express';
import { createValidator, updateValidator } from './tasks.validator';

/*Fire the router function*/
export const tasksRouter: Router = Router();

// Create a default route.
tasksRouter.get('/tasks',taskController.getAll);

tasksRouter.post('/tasks', createValidator, taskController.create

)

tasksRouter.put(
    '/tasks',
    updateValidator,
    taskController.update,
  );


  