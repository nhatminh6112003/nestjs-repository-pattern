import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { CreateOrderDto } from '../dtos/orders.dto';
import { CreateCustomerDto } from '../dtos/customers.dto';

@Injectable()
export class OrdersService {
  constructor(private supabaseService: SupabaseService) {}

  async create(bookData: CreateOrderDto) {
    const supabaseClient = this.supabaseService.getClient();

    const statusPending = 1;
    const statusFailed = 3;
    const { data: user } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('id', bookData.user_id)
      .single();

    if (user?.point < bookData?.amount) {
      return { message: 'Not Enough Point', status: 400 };
    }
    const { data, error } = await supabaseClient
      .from('orders')
      .insert([{ ...bookData, status: statusPending }])
      .select();

    await this.updatePoint({
      user,
      totalPointBuy: bookData?.amount,
      username: user?.username,
    });

    if (error) throw new Error(error.message);
    return { message: 'Create order successfully!', order_id: data[0]?.id,status:200 };
  }
  async updatePoint(data: {
    user: {
      point: number;
    };
    totalPointBuy: number;
    username: number;
  }) {
    const supabaseClient = this.supabaseService.getClient();

    const currentPointAfterBuy = data?.user?.point - data.totalPointBuy;
    if (currentPointAfterBuy < 0) {
      return { message: 'Not Enough Point' };
    }
    await supabaseClient
      .from('customers')
      .update({ point: currentPointAfterBuy })
      .eq('username', data.username);
    return { message: 'Success' };
  }
  async cancelOrder(orderId: number) {
    const statusCancel = 2;
    const { data, error } = await this.supabaseService
      .getClient()
      .from('orders')
      .update({ status: statusCancel })
      .eq('id', orderId);

    if (error) throw new Error(error.message);
    return { message: 'Order canceled successfully!' };
  }
  async getList() {
    const supabaseClient = this.supabaseService.getClient();
    const { data, error } = await supabaseClient.from('orders').select('*');

    if (error) throw new Error(error.message);
    return { data, message: 'Success' };
  }

  async getOrderById(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('orders')
      .select('*')
      .eq('id', id);

    if (error) throw new Error(error.message);
    return data;
  }

  async getOrderByUserId(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('orders')
      .select('*')
      .eq('user_id', id);

    if (error) throw new Error(error.message);
    return data;
  }
}
