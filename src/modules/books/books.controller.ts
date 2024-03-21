import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBookDto } from './books.dto';
import { FindManyBooksQueryParams } from './types';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({
    status: 201,
    description: 'Book has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(
    @Body()
    createBookDto: CreateBookDto,
  ) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all books' })
  @ApiResponse({ status: 200, description: 'Success' })
  async getList(@Query() param: FindManyBooksQueryParams) {
    const pageNumber = param?.page || 1;
    const perPageNumber = param?.perPage || 10;

    return this.booksService.getList(pageNumber, perPageNumber);
  }

  @Get('/search')
  @ApiOperation({ summary: 'Search books by title' })
  @ApiResponse({ status: 200, description: 'Success' })
  async searchByTitle(@Query('title') title: string) {
    return this.booksService.searchByTitle(title);
  }
}
