import { Body, Controller, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Post('/:chatId/:senderId')
  save(@Param() params, @Body('text') text: string) {
    return this.service.save(params.chatId, params.senderId, text);
  }
}
