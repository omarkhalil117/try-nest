import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: 'john',
    description: 'The user name',
  })
  name: string;

  @ApiProperty({
    description: 'The user email',
  })
  email: string;

  @ApiProperty({
    description: 'The user password',
  })
  password: string;
}
