import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  get() {
    return this.service.all();
  }

  @Post('id')
  find(@Body('name') id: number) {
    return this.service.find(id);
  }

  @Post('name')
  findOrCreate(@Body('name') name: string) {
    return this.service.findOrCreate(name);
  }
}
