import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  writer: string;

  @Column()
  coverImage: string;

  @Column()
  point: number;

  @Column()
  tag: string[];
}
