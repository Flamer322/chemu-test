import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat.entity';
import { ChatService } from './chat.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Chat]), UserModule],
  providers: [ChatService],
  exports: [ChatService],
})
export class ChatModule {}
