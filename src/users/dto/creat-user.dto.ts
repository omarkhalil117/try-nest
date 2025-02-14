import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'My First Task',
    description: 'The user name',
  })
  title: string;

  @ApiProperty({
    description: 'The user email',
  })
  email: string;

  @ApiProperty({
    description: 'The user password',
  })
  password: string;
}
