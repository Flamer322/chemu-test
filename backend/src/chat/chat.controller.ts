import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private service: ChatService) {}

  @Post()
  save(@Body('users') userIds: number[]) {
    return this.service.save(userIds);
  }
}
