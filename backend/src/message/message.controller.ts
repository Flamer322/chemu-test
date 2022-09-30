import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Get('/:senderId/:receiverId')
  get(@Param() params) {
    return this.service.all(params.senderId, params.receiverId);
  }

  @Post('/:senderId/:receiverId')
  save(@Param() params, @Body('text') text: string) {
    return this.service.save(params.senderId, params.receiverId, text);
  }
}
