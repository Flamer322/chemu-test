import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
    private userService: UserService,
  ) {}

  find(id: number): Promise<Chat> {
    return this.chatRepository.findOneBy({ id });
  }

  async findOrCreate(user1Id: number, user2Id: number): Promise<Chat> {
    const user1 = await this.userService.find(user1Id);
    const user2 = await this.userService.find(user2Id);
    let chat: Chat = await this.chatRepository.findOne({
      where: [
        { user1: user1, user2: user2 },
        { user1: user2, user2: user1 },
      ],
    });
    if (chat) {
      return chat;
    } else {
      chat = new Chat(user1, user2);
      return this.chatRepository.save(chat);
    }
  }
}
