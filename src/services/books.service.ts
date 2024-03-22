import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { BooksRepository } from 'src/repositories/books.repository';
@Injectable()
export class BooksService {
  constructor(
    private supabaseService: SupabaseService,
    private booksRepository: BooksRepository,
  ) {}

  async searchByTitle(title: string) {
    return this.booksRepository.searchByTitle(title);
  }

  async create(bookData: {
    title: string;
    writer: string;
    coverImage: string;
    point: number;
    tag: string[];
  }) {
    const { data, error } = await this.booksRepository.create(bookData);

    if (error) throw new Error(error.message);
    return { message: 'Create book successfully!' };
  }

  async getList(page: number, perPage: number, keyword?: string) {
    const supabaseClient = this.supabaseService.getClient();

    const offset = (page - 1) * perPage;

    // Sử dụng limit (perPage) và offset để phân trang
    const { data, error, count } = await supabaseClient
      .from('books')
      .select('*', { count: 'exact' })
      .ilike('title', `%${keyword}%`)
      .range(offset, offset + perPage - 1);

    if (error) throw new Error(error.message);

    return {
      data,
      page,
      perPage,
      totalCount: count,
      message: 'Success',
    };
  }
}
