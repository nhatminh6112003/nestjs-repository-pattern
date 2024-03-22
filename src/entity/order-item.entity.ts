import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('orders')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
  product_id: number;

  @Column()
  point: number;

  @Column()
  quantity: number;
}
