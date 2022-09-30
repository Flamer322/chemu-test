import { Controller, Get, Param } from '@nestjs/common';
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

  @Get('name/:name')
  findOrCreate(@Param() params) {
    return this.service.findOrCreate(params.name);
  }
}
