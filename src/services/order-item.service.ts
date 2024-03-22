import { Injectable, NotFoundException } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { CreateOrderDto } from '../dtos/orders.dto';
import { CreateCustomerDto } from '../dtos/customers.dto';
import { OrderItemsRepository } from 'src/repositories/order_item.repository';
import { CreateOrderItemDto } from 'src/dtos/order-item.dto';
@Injectable()
export class OrderItemService {
  constructor(
    private supabaseService: SupabaseService,
    private orderItemsRepository: OrderItemsRepository,
  ) {}

  async create(itemData: CreateOrderItemDto) {
    const { data, error } = await this.orderItemsRepository.create(itemData);
    if (error) throw new Error(error.message);

    return { data, message: 'Success' };
  }
  async getList() {
    const { data, error } = await this.orderItemsRepository.findAll();
    if (error) throw new Error(error.message);
    return { data, message: 'Success' };
  }

  async getOrderItemByOrderId(order_id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('orderItem')
      .select(
        `
      *,
      books (
        *
      )
      `,
      )
      .eq('order_id', order_id);
    if (error) throw new Error(error.message);
    return data;
  }
}
