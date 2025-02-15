import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/creat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
@Injectable()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.getAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
