import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/CreateTask.dto';
import { DeleteTaskDto, TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(): string {
    return 'This action returns all tasks';
  }

  @Get()
  getTasksFromCreatePath(): string {
    return 'Task created';
  }

  @Post('/create')
  createTaks(@Body() taskBody: CreateTaskDto): string {
    return `Task with title ${taskBody.title} was created`;
  }

  @Delete(':title')
  deleteTask(
    @Param('title') title,
    @Body() taskBody: CreateTaskDto,
  ): DeleteTaskDto {
    return this.taskService.deleteTask(title, taskBody);
  }

  @Put('/update/:title')
  updateTask(
    @Param('title') title,
    @Body() taskBody: CreateTaskDto,
  ): { message: string; task: CreateTaskDto } {
    return {
      message: `Task with title ${title} was updated`,
      task: taskBody,
    };
  }
}
