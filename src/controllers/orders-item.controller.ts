import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from '../dtos/orders.dto';
import { OrderItemService } from 'src/services/order-item.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateOrderItemDto } from 'src/dtos/order-item.dto';

@ApiTags('orderItem')
@Controller('orderItem')
export class OrdersItemController {
  constructor(private readonly orderItemService: OrderItemService) {}
  @Post()
  @ApiOperation({ summary: 'Create a new order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async createOrder(@Body() orderItemDto: CreateOrderItemDto) {
    return this.orderItemService.create(orderItemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get List order' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async getListCustomer() {
    return this.orderItemService.getList();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get  order item by order ID' })
  @ApiResponse({
    status: 200,
    description: 'The order has been successfully retrieved.',
  })
  @ApiResponse({ status: 404, description: 'Order not found.' })
  async getOrderById(@Param('id') id: number) {
    return this.orderItemService.getOrderItemByOrderId(id);
  }
}
