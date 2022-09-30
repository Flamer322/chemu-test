import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { ChatService } from './chat.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { ChatController } from './chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, User])],
  providers: [ChatService, UserService],
  controllers: [ChatController],
})
export class ChatModule {}
