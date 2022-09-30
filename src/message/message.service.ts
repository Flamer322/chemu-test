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

  async save(
    text: string,
    chatId: number,
    senderId: number,
    receiverId: number,
  ): Promise<Message> {
    const sender = await this.userService.find(senderId);
    const receiver = await this.userService.find(receiverId);
    const chat = await this.chatService.find(chatId);
    return this.messageRepository.save(
      new Message(text, chat, sender, receiver),
    );
  }
}
