import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  all(): Promise<User[]> {
    return this.usersRepository.find();
  }

  find(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  async findOrCreate(name: string): Promise<User> {
    let user: User = await this.usersRepository.findOne({
      where: {
        name: name,
      },
      relations: {
        chats: {
          users: {
            chats: false,
          },
          messages: {
            sender: true,
          },
        },
      },
    });
    if (!user) {
      user = await this.usersRepository.save(new User(name));
      user.chats = [];
    }

    user.chats = Object.assign({}, ...user.chats.map((x) => ({ [x.id]: x })));

    return user;
  }
}
