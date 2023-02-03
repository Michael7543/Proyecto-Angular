import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Repository, FindOptionsWhere, ILike } from 'typeorm';
import { PaginationDto } from '@core/dto';
import { ServiceResponseHttpModel } from '@shared/models';
import { RepositoryEnum } from '@shared/enums';
import {
  CreateRoleDto,
  FilterRoleDto,
  ReadRoleDto,
  UpdateRoleDto,
} from '@auth/dto';
import { RoleEntity } from '../entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject(RepositoryEnum.ROLE_REPOSITORY)
    private repository: Repository<RoleEntity>,
  ) {}

  async create(payload: CreateRoleDto): Promise<ServiceResponseHttpModel> {
    const newRole = this.repository.create(payload);
    const roleCreated = await this.repository.save(newRole);

    return { data: plainToInstance(ReadRoleDto, roleCreated) };
  }

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const response = await this.repository.findAndCount({ take: 1000 });

    return {
      data: response[0],
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findAll(params?: FilterRoleDto): Promise<ServiceResponseHttpModel> {
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
      data: plainToInstance(ReadRoleDto, response[0]),
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<ServiceResponseHttpModel> {
    const role = await this.repository.findOneBy({ id });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    return { data: plainToInstance(ReadRoleDto, role) };
  }

  async update(
    id: string,
    payload: UpdateRoleDto,
  ): Promise<ServiceResponseHttpModel> {
    const role = await this.repository.preload({ id, ...payload });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const roleUpdated = await this.repository.save(role);

    return { data: plainToInstance(ReadRoleDto, roleUpdated) };
  }

  async remove(id: string): Promise<ServiceResponseHttpModel> {
    const role = await this.repository.findOneBy({ id });

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const roleDeleted = await this.repository.softRemove(role);

    return { data: plainToInstance(ReadRoleDto, roleDeleted) };
  }

  async removeAll(payload: RoleEntity[]): Promise<ServiceResponseHttpModel> {
    const rolesDeleted = await this.repository.softRemove(payload);
    return { data: rolesDeleted };
  }

  private async paginateAndFilter(
    params: FilterRoleDto,
  ): Promise<ServiceResponseHttpModel> {
    let where: FindOptionsWhere<RoleEntity> | FindOptionsWhere<RoleEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
      search = search.trim();
      page = 0;
      where = [];
      where.push({ code: ILike(`%${search}%`) });
      where.push({ name: ILike(`%${search}%`) });
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
      data: plainToInstance(ReadRoleDto, response[0]),
      pagination: { limit, totalItems: response[1] },
    };
  }
}
