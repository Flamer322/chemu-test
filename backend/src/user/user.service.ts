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
    let user: User = await this.usersRepository.findOneBy({ name });
    if (user) {
      return user;
    } else {
      user = new User(name);
      return this.usersRepository.save(user);
    }
  }
}
