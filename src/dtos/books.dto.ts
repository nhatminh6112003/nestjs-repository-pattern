// create-book.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsString, IsUrl, Min } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  writer: string;

  @ApiProperty()
  @IsUrl()
  coverImage: string;

  @ApiProperty()
  @IsInt()
  @Min(0)
  point: number;

  @ApiProperty({ example: ['fiction', 'science'] })
  @IsArray()
  @IsString({ each: true })
  tag: string[];
}
