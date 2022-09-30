import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Chat } from '../chat/chat.entity';
import { User } from '../user/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Chat, (chat) => chat.messages, { eager: false })
  chat: Chat;

  @ManyToOne(() => User, (sender) => sender.id, { eager: true })
  sender: User;

  @ManyToOne(() => User, (receiver) => receiver.id, { eager: true })
  receiver: User;

  constructor(text: string, chat: Chat, sender: User, receiver: User) {
    this.text = text;
    this.chat = chat;
    this.sender = sender;
    this.receiver = receiver;
  }
}
