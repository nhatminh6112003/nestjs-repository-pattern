import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class FindManyBooksQueryParams {
  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => Number)
  page: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  keyword?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => Number)
  perPage: number;
}
