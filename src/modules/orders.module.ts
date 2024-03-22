// orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';
import { SupabaseService } from 'src/services/supabase.service';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrdersRepository } from 'src/repositories/orders.repository';
@Module({
  controllers: [OrdersController],
  providers: [OrdersRepository, OrdersService, SupabaseService],
})
export class OrdersModule {}
