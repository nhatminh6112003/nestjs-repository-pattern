import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Min, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Unique username for the customer',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'John', description: 'First name of the customer' })
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the customer' })
  @IsNotEmpty()
  @IsString()
  last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginCustomerDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserNameDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;
}
