// supabase.module.ts
import { Module } from '@nestjs/common';
import { BooksController } from 'src/controllers/books.controller';
import { BooksService } from 'src/services/books.service';
import { SupabaseService } from 'src/services/supabase.service';
import { BooksRepository } from 'src/repositories/books.repository';
import { SupabaseClient } from '@supabase/supabase-js';
@Module({
  controllers: [BooksController],
  providers: [BooksRepository, BooksService, SupabaseService],
})
export class BooksModule {}
