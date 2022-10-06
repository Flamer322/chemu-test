import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { MessageService } from './message.service';
import { UserModule } from '../user/user.module';
import { ChatModule } from '../chat/chat.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule, ChatModule],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
