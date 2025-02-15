import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @ApiProperty({
    example: 'john',
    description: 'The user name',
  })
  name: string;

  @ApiProperty({
    description: 'The user password',
  })
  password: string;
}
