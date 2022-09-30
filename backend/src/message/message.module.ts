import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { ChatService } from '../chat/chat.service';
import { Chat } from '../chat/chat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User, Chat])],
  providers: [MessageService, UserService, ChatService],
  controllers: [MessageController],
})
export class MessageModule {}
