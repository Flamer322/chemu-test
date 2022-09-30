import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { Message } from './message.entity';
import { ChatService } from '../chat/chat.service';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private chatService: ChatService,
    private userService: UserService,
  ) {}

  async save(chatId: number, senderId: number, text: string): Promise<Message> {
    const chat = await this.chatService.find(chatId);
    const sender = await this.userService.find(senderId);
    return this.messageRepository.save(new Message(chat, sender, text));
  }
}
