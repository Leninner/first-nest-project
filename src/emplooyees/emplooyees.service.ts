import { Body, Injectable } from '@nestjs/common';
import { CreateEmplooyeeDto } from './dto/createEmplooyeeDto';

@Injectable()
export class EmplooyeesService {
  private emplooyees: CreateEmplooyeeDto[] = [
    {
      name: 'John',
      department: 'IT',
      salary: 1000,
      age: 30,
    },
  ];

  getAll(): CreateEmplooyeeDto[] {
    return this.emplooyees;
  }

  createEmplooyee(@Body() employee: CreateEmplooyeeDto): string {
    this.emplooyees.push(employee);
    return `Emplooyee with name ${employee.name} was created`;
  }
}
