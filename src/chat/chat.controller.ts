import { Controller, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private service: ChatService) {}

  @Get('/:user1Id/:user2Id')
  findOrCreate(@Param() params) {
    return this.service.findOrCreate(params.user1Id, params.user2Id);
  }
}
