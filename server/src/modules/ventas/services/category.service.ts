//Servicio:canal de comunicacion directa entre el backend y la base de datos
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { response } from 'express';
import { PaginationDto } from '../dto/pagination/pagination.dto';
import { CreateCategoryDto } from '../dto/categories/create-category.dto';
import { CategoryEntity } from '../entities/category.model';
import { FilterCategoryDto } from '../dto/categories/filter-category.dto';
import { ReadCategoryDto } from '../dto/categories/read-category.dto';
import { UpdateCategoryDto } from '../dto/categories/update-category.dto';
import { ServiceResponseHttpModel } from 'src/shared/models/service-response-http.model';

@Injectable()
export class CategoryService {
    [x: string]: any;
    constructor(
        @Inject(RepositoryEnum.CATEGORY_REPOSITORY)
        private repository: Repository<CategoryEntity>,
    ) { }
    async create(payload: CreateCategoryDto): Promise<ServiceResponseHttpModel> {
        const newCategory = this.repository.create(payload); 
        const categoryCreated = this.repository.save(newCategory); 
        return { data: plainToInstance(ReadCategoryDto, categoryCreated) }; 
    }

    async catalogue(): Promise<ServiceResponseHttpModel> {
        const newEvent = this.repository.findAndCount({ take: 1000 });
        return {
            data: this.response[0],
            pagination: { totaItems: response[1], limit: 10 },
        };
    }

    //*Es asicrono cuando de vuelve una promesa
    async findAll(params?: FilterCategoryDto): Promise<ServiceResponseHttpModel> {
        if (params?.limit > 0 && params?.page >= 0)
            return await this.paginateAndFilter(params);
        const response = await this.repository.findAndCount({
            order: {
                updateat: 'DESC',
            },
        });
        return {
            data: plainToInstance(ReadCategoryDto, response[0]),
            pagination: { totalItems: response[1], limit: 10 },
        };
    }

    async findOne(id: string): Promise<ServiceResponseHttpModel> {
        const category = await this.repository.findOneBy({ id });

        if (!category) {
            throw new NotFoundException('Category not found');
        }
        return { data: plainToInstance(ReadCategoryDto, category) };
    }

    async update(
        id: string,
        payload: UpdateCategoryDto,
    ): Promise<ServiceResponseHttpModel> {
        const category = await this.repository.preload({ id, ...payload });

        if (!category) {
            throw new NotFoundException("Category not found");
        }
        const categoryUpdated = await this.repository.save(category);

        return { data: plainToInstance(ReadCategoryDto, categoryUpdated) };
    }

    async remove(id: string): Promise<ServiceResponseHttpModel> {
        const category = await this.repository.findOneBy({ id });

        if (!category) {
            throw new NotFoundException("category not found");
        }
        const categoryDelete = await this.repository.softRemove(category);

        return { data: plainToInstance(ReadCategoryDto, categoryDelete) };
    }
    async removeAll(payload: CategoryEntity[]): Promise<ServiceResponseHttpModel> {
        const categoryDeleted = await this.repository.softRemove(payload);
        return { data: categoryDeleted };
    }
    private async paginateAndFilter(
        params: FilterCategoryDto
    ): Promise<ServiceResponseHttpModel> {
        let where: FindOptionsWhere<CategoryEntity> | FindOptionsWhere<CategoryEntity>[];
        where = {};
        let { page, search } = params;
        const { limit } = params;

        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({ title: ILike(% ${ search } %) });
        }

        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: PaginationDto.getOffset(limit, page),
            order: {
                updatedat: 'DESC',
            },

        });
        return {
            data: plainToInstance(ReadCategoryDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        }

    }
    async activatecategory(payload: CreateCategoryDto): Promise<ServiceResponseHttpModel> {
        const newcategory = this.repository.create(payload);
        const categoryCreated = await this.repository.save(newcategory);

        return { data: plainToInstance(ReadCategoryDto, categoryCreated) };
    }

    async closecategory(id: string): Promise<ServiceResponseHttpModel> {
        const category = await this.repository.findOneBy({ id });

        if (!category) {
            throw new NotFoundException("category not found");
        }
        const categoryDelete = await this.repository.softRemove(category);

        return { data: plainToInstance(ReadCategoryDto, categoryDelete) };
    }

}