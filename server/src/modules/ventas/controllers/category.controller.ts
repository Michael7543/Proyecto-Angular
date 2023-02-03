import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto } from '../dto/categories/create-category.dto';
import { FilterCategoryDto } from '../dto/categories/filter-category.dto';
import { UpdateCategoryDto } from '../dto/categories/update-category.dto';
import { CategoryEntity } from '../entities/category.model';
import { ResponseHttpModel } from 'src/shared/models/response-http-model';
import { Auth } from 'src/modules/auth/decorators';

  
  @ApiTags('Category')
  @Controller('category')
  export class CategoryController {
    constructor(private categoryService: CategoryService) {}
  
    @ApiOperation({ summary: 'Create One' })
    @Auth()
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() payload: CreateCategoryDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.create(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Category created',
        title: 'Created',
      };
    }
  
    @ApiOperation({ summary: 'Catalogue' })
    @Get('catalogue')
    @HttpCode(HttpStatus.OK)
    async catalogue(): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.catalogue();
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'catalogue',
        title: 'Catalogue',
      };
    }
  
 
  
    @ApiOperation({ summary: 'Find All' })
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query() params: FilterCategoryDto): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.findAll(params);
  
      return {
        data: serviceResponse.data,
        pagination: serviceResponse.pagination,
        message: 'index',
        title: 'Success',
      };
    }
  
    @ApiOperation({ summary: 'Find One' })
    @Auth()
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.findOne(id);
  
      return {
        data: serviceResponse.data,
        message: 'show ${id}',
        title: 'Success',
      };
    }
  
    @ApiOperation({ summary: 'Update One' })
    @Auth()
    @Put(':id')
    @HttpCode(HttpStatus.CREATED)
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() payload: UpdateCategoryDto,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.update(id, payload);
  
      return {
        data: serviceResponse.data,
        message: 'Category updated ${id}',
        title: 'Updated',
      };
    }
  
    @ApiOperation({ summary: 'Remove One' })
    @Auth()
    @Delete(':id')
    @HttpCode(HttpStatus.CREATED)
    async remove(
      @Param('id', ParseUUIDPipe) id: string,
    ): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.remove(id);
  
      return {
        data: serviceResponse.data,
        message: 'Category deleted ${id}',
        title: 'Deleted',
      };
    }
  
    @ApiOperation({ summary: 'Remove All' })
    @Auth()
    @Patch('remove-all')
    @HttpCode(HttpStatus.CREATED)
    async removeAll(@Body() payload: CategoryEntity[]): Promise<ResponseHttpModel> {
      const serviceResponse = await this.categoryService.removeAll(payload);
  
      return {
        data: serviceResponse.data,
        message: 'Category deleted',
        title: 'Deleted',
      };
    }
  }