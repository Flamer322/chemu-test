import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { ChatModule } from '../chat/chat.module';
import { MessageModule } from '../message/message.module';

@Module({
  providers: [EventGateway],
  imports: [ChatModule, MessageModule],
})
export class EventModule {}
