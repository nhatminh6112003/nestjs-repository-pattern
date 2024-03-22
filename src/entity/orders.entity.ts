// orders.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  amount: number;

  @Column()
  status: string;

  @Column()
  address: string;

  @Column()
  phone_number: string;
}
