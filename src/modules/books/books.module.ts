// supabase.module.ts
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { SupabaseService } from '../supabase/supabase.service';
import { BooksController } from './books.controller';
@Module({
  controllers: [BooksController],
  providers: [BooksService, SupabaseService],
})
export class BooksModule {}
