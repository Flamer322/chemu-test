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

  // eslint-disable-next-line @typescript-eslint/ban-types
  async save(chatId: number, senderId: number, text: string): Promise<Object> {
    const chat = await this.chatService.find(chatId);
    const sender = await this.userService.find(senderId);
    const message = await this.messageRepository.save(
      new Message(chat, sender, text),
    );
    return {
      id: message.id,
      text: message.text,
      sender: message.sender,
      created_at: message.created_at,
    };
  }
}
