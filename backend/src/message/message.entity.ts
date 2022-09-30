import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => User, (sender) => sender.id, { eager: true })
  sender: User;

  @ManyToOne(() => User, (receiver) => receiver.id, { eager: true })
  receiver: User;

  constructor(sender: User, receiver: User, text: string) {
    this.sender = sender;
    this.receiver = receiver;
    this.text = text;
  }
}
