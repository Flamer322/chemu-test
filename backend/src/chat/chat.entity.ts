import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Message } from '../message/message.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'chat_user',
    joinColumn: {
      name: 'chat',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  constructor(users: User[]) {
    this.users = users;
  }
}
