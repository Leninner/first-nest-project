import { Body, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTask.dto';

export interface DeleteTaskDto {
  message: string;
  task: CreateTaskDto;
}

@Injectable()
export class TaskService {
  getHello(): string {
    return 'Hello World by Lenin!';
  }

  createTask(): string {
    return 'Task created';
  }

  createTaks(@Body() taskBody: CreateTaskDto): string {
    return `Task with title ${taskBody.title} was created`;
  }

  deleteTask(title: string, taskBody: CreateTaskDto): DeleteTaskDto {
    return {
      message: `Task with title ${title} was deleted`,
      task: taskBody,
    };
  }
}
