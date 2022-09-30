import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private userService: UserService,
  ) {}

  async all(senderId: number, receiverId: number): Promise<Message[]> {
    const sender = await this.userService.find(senderId);
    const receiver = await this.userService.find(receiverId);
    return this.messageRepository.find({
      where: [
        { sender: sender, receiver: receiver },
        { sender: receiver, receiver: sender },
      ],
    });
  }

  async save(
    senderId: number,
    receiverId: number,
    text: string,
  ): Promise<Message> {
    const sender = await this.userService.find(senderId);
    const receiver = await this.userService.find(receiverId);
    return this.messageRepository.save(new Message(sender, receiver, text));
  }
}
