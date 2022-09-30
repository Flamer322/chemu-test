import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Message } from '../message/message.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user1) => user1.id, { eager: true })
  user1: User;

  @ManyToOne(() => User, (user2) => user2.id, { eager: true })
  user2: User;

  @OneToMany(() => Message, (message) => message.chat, { eager: true })
  messages: Message[];

  constructor(user1: User, user2: User) {
    this.user1 = user1;
    this.user2 = user2;
  }
}
