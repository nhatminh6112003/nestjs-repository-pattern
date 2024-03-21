import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from '../customers/customers.module';
import { SupabaseModule } from '../supabase/supabase.module';
import { BooksModule } from '../books/books.module';
import { OrdersModule } from '../orders/orders.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    SupabaseModule,
    BooksModule,
    OrdersModule
  ],
})
export class AppModule {}
