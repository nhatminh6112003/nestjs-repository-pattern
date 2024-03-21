import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateOrderDto } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(private supabaseService: SupabaseService) {}

  async create(bookData: CreateOrderDto) {
    const statusSuccess = 1;

    const supabaseClient = this.supabaseService.getClient();
    let { data, error } = await supabaseClient
      .from('orders')
      .insert([{ ...bookData, status: statusSuccess }]);

    if (error) throw new Error(error.message);
    return { message: 'Create order successfully!' };
  }
  async cancelOrder(orderId: string): Promise<any> {
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
    let { data, error } = await supabaseClient.from('orders').select('*');

    if (error) throw new Error(error.message);
    return { data, message: 'Success' };
  }

  async getOrderById(id: number) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('orders')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new Error(error.message);
    return data;
  }
}
