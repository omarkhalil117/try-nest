import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/creat-user.dto';

@ApiTags('users')
@Controller('users')
@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAll();
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }
}
