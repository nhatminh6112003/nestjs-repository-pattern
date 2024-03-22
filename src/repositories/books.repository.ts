import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/dtos/books.dto';
import { SupabaseService } from 'src/services/supabase.service';

@Injectable()
export class BooksRepository {
  private table = 'books';

  constructor(private readonly supabaseService: SupabaseService) {}

  private get supabase() {
    return this.supabaseService.getClient();
  }

  public async searchByTitle(title: string) {
    const { data, error } = await this.supabase
      .from('books')
      .select('*')
      .ilike('title', `%${title}%`);

    if (error) throw new Error(error.message);
    return data;
  }

  public async findAll() {
    const { data, error } = await this.supabase.from(this.table).select('*');

    if (error) {
      throw error;
    }

    return data;
  }

  public async findById(id: number) {
    const { data, error } = await this.supabase
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  public async create(book: CreateBookDto) {
    const { data, error } = await this.supabase.from(this.table).insert([book]);

    if (error) {
      throw error;
    }

    return { data, error };
  }

  public async updateOne(id: number, updateUserDto: CreateBookDto) {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(updateUserDto)
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  }

  public async destroy(id: number): Promise<void> {
    const { error } = await this.supabase
      .from(this.table)
      .delete()
      .eq('id', id);

    if (error) {
      throw error;
    }
  }
}
