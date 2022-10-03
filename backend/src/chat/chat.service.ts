import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
    private userService: UserService,
  ) {}

  find(id: number): Promise<Chat> {
    return this.chatRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        users: {
          chats: false,
        },
        messages: {
          sender: true,
        },
      },
    });
  }

  async save(userIds: number[]): Promise<Chat> {
    const users: User[] = [];
    for (const userId of userIds) {
      users.push(await this.userService.find(userId));
    }
    const chat = await this.chatRepository.save(new Chat(users));
    chat.messages = [];

    return chat;
  }
}
