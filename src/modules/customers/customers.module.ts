// supabase.module.ts
import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { SupabaseService } from '../supabase/supabase.service';
import { CustomersController } from './customers.controller';
@Module({
  controllers: [CustomersController],
  providers: [CustomersService, SupabaseService],
})
export class CustomersModule {}
