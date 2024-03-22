// orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';
import { SupabaseService } from 'src/services/supabase.service';
import { OrdersController } from 'src/controllers/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, SupabaseService],
})
export class OrdersModule {}
