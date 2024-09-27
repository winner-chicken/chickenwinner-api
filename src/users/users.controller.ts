import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { HashpassPipe } from './pipes/hashpass.pipe';
import { CreateUserDto } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('register')
  @UsePipes(new HashpassPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    const userCreated = await this.usersService.createUser(createUserDto);
    if (userCreated) {
      return {
        message: 'User created successfully',
        status: 'code-sended',
      };
    }
  }
}
