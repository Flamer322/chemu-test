import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Chat } from '../chat/chat.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Chat)
  @JoinTable({
    name: 'chat_user',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'chat',
      referencedColumnName: 'id',
    },
  })
  chats: Chat[];

  constructor(name: string, id?: number) {
    this.name = name;
    this.id = id;
  }
}
