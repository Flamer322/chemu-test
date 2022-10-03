import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private service: ChatService) {}

  @Get('/:chatId')
  find(@Param() params) {
    return this.service.find(params.chatId);
  }

  @Post()
  save(@Body('users') userIds: number[]) {
    return this.service.save(userIds);
  }
}
