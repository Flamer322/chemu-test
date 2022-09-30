import { Controller, Get, Param } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Get('/:chatId/:senderId/:receiverId/:text')
  findOrCreate(@Param() params) {
    return this.service.save(
      params.text,
      params.chatId,
      params.senderId,
      params.receiverId,
    );
  }
}
