import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import * as bcrypt from 'bcrypt';
import { CustomersRepository } from 'src/repositories/customers.repository';
@Injectable()
export class CustomersService {
  constructor(
    private supabaseService: SupabaseService,
    private customersRepository: CustomersRepository,
  ) {}

  async create(data: {
    username: string;
    first_name: string;
    last_name: string;
    password: string;
  }) {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(data.password, saltOrRounds);
    const supabaseClient = this.supabaseService.getClient();
    const defaultPoint = 100;
    const { data: existingUser, error: findError } =
      await this.customersRepository.findByUserName(data.username);

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const { error } = await supabaseClient
      .from('customers')
      .insert([{ ...data, point: defaultPoint, password: hashPassword }]);
    if (error) {
      throw new Error(error.message);
    }
    const { data: findUser } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('username', data.username)
      .single();
    return { message: 'Customer added successfully!', data: findUser };
  }

  async login(data: { username: string; password: string }) {
    const supabaseClient = this.supabaseService.getClient();
    const { data: user, error: findError } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('username', data.username)
      .single();

    if (!user) {
      return { message: 'Login failed', status: 404 };
    }
    const isMatch = await bcrypt.compare(data.password, user?.password);
    if (isMatch) {
      const { password, ...userInfo } = user;
      return { message: 'Success!', user: userInfo, status: 200 };
    }
    return { message: 'Login failed', status: 401 };
  }
  async getByUserName(data: { username: string }) {
    const supabaseClient = this.supabaseService.getClient();
    const { data: user, error } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('username', data.username)
      .single();
    const { password, ...infoUser } = user;
    return { message: 'Success', user: infoUser };
  }

  async getList() {
    const { data, error } = await this.customersRepository.findAll();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}
