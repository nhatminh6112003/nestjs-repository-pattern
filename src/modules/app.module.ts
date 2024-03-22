import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers.module';
import { SupabaseModule } from './supabase.module';
import { BooksModule } from './books.module';
import { OrdersModule } from './orders.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    SupabaseModule,
    BooksModule,
    OrdersModule,
  ],
})
export class AppModule {}
