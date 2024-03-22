import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
@Entity('customers')
@Unique(['username'])
export class Customers {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'username', unique: true })
  username: string;

  @Column({ name: 'first_name' })
  first_name: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'last_name' })
  last_name: string;

  @Column({ name: 'point' })
  point: number;
}
