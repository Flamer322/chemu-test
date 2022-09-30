import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Chat } from '../chat/chat.entity';
import { User } from '../user/user.entity';
import { ChatService } from '../chat/chat.service';
import { UserService } from '../user/user.service';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message, Chat, User])],
  providers: [MessageService, ChatService, UserService],
  controllers: [MessageController],
})
export class MessageModule {}
