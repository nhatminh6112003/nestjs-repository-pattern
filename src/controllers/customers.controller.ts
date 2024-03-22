import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import {
  CreateCustomerDto,
  LoginCustomerDto,
  UserNameDto,
} from '../dtos/customers.dto';
@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Register customer' })
  @ApiResponse({
    status: 201,
    description: 'Customer has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'List customer' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getListCustomer() {
    return this.customersService.getList();
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in a customer' })
  @ApiResponse({
    status: 200,
    description: 'Logged in successfully.',
  })
  @ApiResponse({ status: 404, description: 'Not Found User.' })
  @ApiResponse({ status: 401, description: 'Login failed.' })
  async login(@Body() loginCustomerDto: LoginCustomerDto) {
    return this.customersService.login(loginCustomerDto);
  }
  @Get('username')
  @ApiOperation({ summary: 'Get by username' })
  @ApiResponse({
    status: 200,
    description: ' successfully.',
  })
  async getByUserName(@Query() data: UserNameDto) {
    return this.customersService.getByUserName(data);
  }
}
