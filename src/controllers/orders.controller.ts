import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { CreateOrderDto } from '../dtos/orders.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get List order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getListCustomer() {
    return this.ordersService.getList();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an order by ID' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  async getOrderById(@Param('id') id: number) {
    return this.ordersService.getOrderById(id);
  }

  @Get('/user/:id')
  @ApiOperation({ summary: 'Get an order by user id' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  async getOrderByUserName(@Param('id') id: number) {
    return this.ordersService.getOrderByUserId(id);
  }

  @Put('/cancel/:order_id')
  @ApiOperation({ summary: 'Cancel  order by ID' })
  @ApiResponse({
    status: 200,
    description: 'Cancel Order',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  async cancelOrder(@Param('order_id') order_id: number) {
    return this.ordersService.cancelOrder(order_id);
  }
}
