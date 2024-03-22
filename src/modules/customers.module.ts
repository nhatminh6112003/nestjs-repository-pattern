// supabase.module.ts
import { Module } from '@nestjs/common';
import { CustomersService } from 'src/services/customers.service';
import { SupabaseService } from 'src/services/supabase.service';
import { CustomersController } from 'src/controllers/customers.controller';
import { CustomersRepository } from 'src/repositories/customers.repository';

@Module({
  controllers: [CustomersController],
  providers: [CustomersRepository, CustomersService, SupabaseService],
})
export class CustomersModule {}
