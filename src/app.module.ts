import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './tasks/task.service';
import { TasksController } from './tasks/tasks.controller';
import { EmplooyeesController } from './emplooyees/emplooyees.controller';
import { EmplooyeesService } from './emplooyees/emplooyees.service';

@Module({
  imports: [],
  controllers: [AppController, TasksController, EmplooyeesController],
  providers: [AppService, TaskService, EmplooyeesService],
})
export class AppModule {}
