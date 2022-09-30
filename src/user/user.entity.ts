import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  constructor(name: string, id?: number) {
    this.name = name;
    this.id = id;
  }
}
