import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Chat } from '../chat/chat.entity';
import { User } from '../user/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Chat)
  chat: Chat;

  @ManyToOne(() => User)
  sender: User;

  constructor(chat: Chat, sender: User, text: string) {
    this.chat = chat;
    this.sender = sender;
    this.text = text;
  }
}
