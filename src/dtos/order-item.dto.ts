// orders.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNumber()
  order_id: number;
  @ApiProperty()
  @IsNumber()
  product_id: number;
  @ApiProperty()
  @IsNumber()
  point: number;
  @ApiProperty()
  @IsNumber()
  quantity: number;
}
