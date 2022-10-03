import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  get() {
    return this.service.all();
  }

  @Get('id/:id')
  find(@Param() params) {
    return this.service.find(params.id);
  }

  @Post('name')
  findOrCreate(@Body('name') name: string) {
    return this.service.findOrCreate(name);
  }
}
