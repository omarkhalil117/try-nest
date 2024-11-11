import { TaskStatus } from '../task.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    example: 'My First Task',
    description: 'The title of the task',
  })
  title: string;
  @ApiProperty({
    example: 'OPEN',
    enum: TaskStatus,
    description: 'The status of the task',
  })
  status: TaskStatus;
}
