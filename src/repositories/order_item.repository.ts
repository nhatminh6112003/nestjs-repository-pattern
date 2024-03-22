import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from 'src/dtos/order-item.dto';
import { SupabaseService } from 'src/services/supabase.service';

@Injectable()
export class OrderItemsRepository {
  private table = 'orderItem';
  constructor(private readonly supabaseService: SupabaseService) {}

  private get supabase() {
    return this.supabaseService.getClient();
  }

  public async findAll() {
    const { data, error } = await this.supabase.from(this.table).select(`
    product_id,
    order_id,
    books (
      *
    )
  `);

    if (error) {
      throw error;
    }

    return { data, error };
  }

  public async findById(id: number) {
    const { data, error } = await this.supabase
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  public async create(orderItemData: CreateOrderItemDto) {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert([orderItemData]);

    if (error) {
      throw error;
    }

    return { data, error };
  }

  public async updateOne(id: number, updateData: CreateOrderItemDto) {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(updateData)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  public async destroy(id: number): Promise<void> {
    const { error } = await this.supabase
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }
  }
}
