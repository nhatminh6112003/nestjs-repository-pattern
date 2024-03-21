import { Body, Controller, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateCustomerDto, LoginCustomerDto } from './create-customers.dto';
@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({
    status: 201,
    description: 'Customer has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
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
}