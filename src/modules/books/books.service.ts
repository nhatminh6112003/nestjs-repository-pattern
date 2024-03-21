import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class BooksService {
  constructor(private supabaseService: SupabaseService) {}

  async searchByTitle(title: string) {
    const supabaseClient = this.supabaseService.getClient();
    let { data, error } = await supabaseClient
      .from('books')
      .select('*')
      .ilike('title', `%${title}%`);

    if (error) throw new Error(error.message);
    return data;
  }

  async create(bookData: {
    title: string;
    writer: string;
    coverImage: string;
    point: number;
    tag: string[];
  }) {
    const supabaseClient = this.supabaseService.getClient();
    let { data, error } = await supabaseClient.from('books').insert([bookData]);

    if (error) throw new Error(error.message);
    return { message: 'Create book successfully!' };
  }

  async getList(page: number, perPage: number) {
    const supabaseClient = this.supabaseService.getClient();

    // Tính offset dựa vào page và perPage
    const offset = (page - 1) * perPage;

    // Sử dụng limit (perPage) và offset để phân trang
    let { data, error, count } = await supabaseClient
      .from('books')
      .select('*', { count: 'exact' }) // Lấy tổng số lượng để tính toán số trang
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
