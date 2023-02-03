import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository, FindOptionsWhere, ILike, Equal, IsNull } from 'typeorm';
import { MenuEntity } from '@auth/entities';
import { PaginationDto } from '@core/dto';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import {
  CreateMenuDto,
  FilterMenuDto,
  ReadMenuDto,
  UpdateMenuDto,
} from '@auth/dto';

@Injectable()
export class MenusService {
  constructor(
    @Inject(RepositoryEnum.MENU_REPOSITORY)
    private repository: Repository<MenuEntity>,
  ) {}

  async create(payload: CreateMenuDto): Promise<ServiceResponseHttpModel> {
    const newMenu = this.repository.create(payload);
    const menuCreated = await this.repository.save(newMenu);

    return { data: plainToInstance(ReadMenuDto, menuCreated) };
  }

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.repository.findAndCount({ take: 1000 });

    return {
      data: response[0],
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async getMenusForSidebar(): Promise<ServiceResponseHttpModel> {
    let response = await this.repository.find({
      where: { parent: IsNull() },
      relations: { children: true, parent: true },
    });

    response = response.filter((element) => element.parent === null);

    return {
      data: response,
    };
  }

  async findAll(params?: FilterMenuDto): Promise<ServiceResponseHttpModel> {
    //Pagination & Filter by Search
    if (params?.limit > 0 && params?.page >= 0) {
      return await this.paginateAndFilter(params);
    }

    //Other filters
    // if (params.birthdate) {
    //   return this.filterByBirthdate(params.birthdate);
    // }

    //All
    const response = await this.repository.findAndCount({
      order: { updatedAt: 'DESC' },
    });

    return {
      data: plainToInstance(ReadMenuDto, response[0]),
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<ServiceResponseHttpModel> {
    const menu = await this.repository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException('Menu not found');
    }

    return { data: plainToInstance(ReadMenuDto, menu) };
  }

  async update(
    id: string,
    payload: UpdateMenuDto,
  ): Promise<ServiceResponseHttpModel> {
    const menu = await this.repository.preload({ id, ...payload });

    if (!menu) {
      throw new NotFoundException('Menu not found');
    }

    const menuUpdated = await this.repository.save(menu);

    return { data: plainToInstance(ReadMenuDto, menuUpdated) };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const menu = await this.repository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException('Menu not found');
    }

    const menuDeleted = await this.repository.softRemove(menu);

    return { data: plainToInstance(ReadMenuDto, menuDeleted) };
  }

  async removeAll(payload: MenuEntity[]): Promise<ServiceResponseHttpModel> {
    const menusDeleted = await this.repository.softRemove(payload);
    return { data: menusDeleted };
  }

  private async paginateAndFilter(
    params: FilterMenuDto,
  ): Promise<ServiceResponseHttpModel> {
    let where: FindOptionsWhere<MenuEntity> | FindOptionsWhere<MenuEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
      search = search.trim();
      page = 0;
      where = [];
      where.push({ label: ILike(`%${search}%`) });
    }

    const response = await this.repository.findAndCount({
      where,
      take: limit,
      skip: PaginationDto.getOffset(limit, page),
      order: {
        updatedAt: 'DESC',
      },
    });

    return {
      data: plainToInstance(ReadMenuDto, response[0]),
      pagination: { limit, totalItems: response[1] },
    };
  }
}
