import { TaskStatus } from '../task.model';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    example: 'Updated Task Title',
    description: 'The new title of the task',
    required: false,
  })
  title?: string;

  @ApiProperty({
    example: 'IN_PROGRESS',
    enum: TaskStatus,
    description: 'The new status of the task',
    required: false,
  })
  status?: TaskStatus;
}
