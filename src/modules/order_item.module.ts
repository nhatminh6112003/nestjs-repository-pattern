import { Module } from '@nestjs/common';
import { SupabaseService } from 'src/services/supabase.service';
import { OrderItemService } from 'src/services/order-item.service';
import { OrderItemsRepository } from 'src/repositories/order_item.repository';
import { OrdersItemController } from 'src/controllers/orders-item.controller';
@Module({
  controllers: [OrdersItemController],
  providers: [OrderItemsRepository, OrderItemService, SupabaseService],
})
export class OrdersItemModule {}
