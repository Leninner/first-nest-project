import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmplooyeeDto } from './dto/createEmplooyeeDto';
import { EmplooyeesService } from './emplooyees.service';

@Controller('emplooyees')
export class EmplooyeesController {
  constructor(private readonly emplooyeesService: EmplooyeesService) {}

  @Get()
  getAll(): CreateEmplooyeeDto[] {
    return this.emplooyeesService.getAll();
  }

  @Post('/create')
  createEmplooyee(@Body() employee: CreateEmplooyeeDto): string {
    return this.emplooyeesService.createEmplooyee(employee);
  }
}
