import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  Query,
  Request,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, UserLoginDto, VerifyEmailDto } from './dtos';
import { UserEntity } from './entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.userService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;

    return await this.userService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    return await this.userService.login(email, password);
  }

  @Get()
  getUserList() {
    return 'dd';
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserEntity> {
    return await this.userService.getUserInfo(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
