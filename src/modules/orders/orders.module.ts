// orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from './orders.entity';
import { SupabaseService } from '../supabase/supabase.service';
@Module({
  controllers: [OrdersController],
  providers: [OrdersService,SupabaseService],
})
export class OrdersModule {}
