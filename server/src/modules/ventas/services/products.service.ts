import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
//import { ServiceResponseHttpModel } from '@shared/models';
import { plainToInstance } from 'class-transformer';
import { response } from 'express';
import { PaginationDto } from '../dto/pagination/pagination.dto';
import { ProductEntity } from '../entities/product.model';
import { CreateProductDto } from '../dto/products/create-product.dto';
import { ReadProductDto } from '../dto/products/read-product.dto';
import { FilterProductDto } from '../dto/products/filter-product.dto';
import { UpdateProductDto } from '../dto/products/update-product.dto';
import { ServiceResponseHttpModel } from 'src/shared/models/service-response-http.model';


@Injectable()
export class ProductsService {
    [x: string]: any;
  constructor(
    @Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository: Repository<ProductEntity>,
  ) {}
  async create(payload: CreateProductDto): Promise<ServiceResponseHttpModel> {
    const newProduct = this.repository.create(payload); //se crea el producto
    const productCreated = this.repository.save(newProduct); //guardar el producto nuevo creado
    return { data: plainToInstance(ReadProductDto, productCreated) }; //visualizamos
  }

  async catalogue(): Promise<ServiceResponseHttpModel> {
    const newEvent = this.repository.findAndCount({ take: 1000 });
    return {
      data: this.response[0],
      pagination: { totaItems: response[1], limit: 10 },
    };
  }

  //*Es asicrono cuando de vuelve una promesa
  async findAll(params?: FilterProductDto): Promise<ServiceResponseHttpModel> {
    if (params?.limit > 0 && params?.page >= 0)
      return await this.paginateAndFilter(params);
    const response = await this.repository.findAndCount({
      order: {
        updateAt: 'DESC',
      },
    });
    return {
      data: plainToInstance(ReadProductDto, response[0]),
      pagination: { totalItems: response[1], limit: 10 },
    };
  }

  async findOne(id: string): Promise<ServiceResponseHttpModel> {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException('Project not found');
    }
    return { data: plainToInstance(ReadProductDto, product) };
  }

  async update(
    id: string,
    payload: UpdateProductDto,
): Promise<ServiceResponseHttpModel> {
    const product = await this.repository.preload({ id, ...payload });

    if (!product) {
        throw new NotFoundException("product not found");
    }
    const productUpdated = await this.repository.save(product);

    return { data: plainToInstance(ReadProductDto, productUpdated) };
}

async remove(id: string): Promise<ServiceResponseHttpModel> {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
        throw new NotFoundException("product not found");
    }
    const productDelete = await this.repository.softRemove(product);

    return { data: plainToInstance(ReadProductDto, productDelete) };
}
//cuidado con este metodo este is es necesario 
async removeAll(payload: ProductEntity[]): Promise<ServiceResponseHttpModel> {
    const productsDeleted = await this.repository.softRemove(payload);
    return { data: productsDeleted };
}
private async paginateAndFilter(
    params: FilterProductDto
): Promise<ServiceResponseHttpModel> {
    let where: FindOptionsWhere<ProductEntity> | FindOptionsWhere<ProductEntity>[];
    where = {};
    let { page, search } = params;
    const { limit } = params;

    if (search) {
        search = search.trim();
        page = 0;
        where = [];
        where.push({ title: ILike(%${search}%) });
    }

    const response = await this.repository.findAndCount({
        where,
        take: limit,
        skip: PaginationDto.getOffset(limit, page),
        order: {
            updatedAt: 'DESC'
        },

    });
    return {
        data: plainToInstance(ReadProductDto, response[0]),
        pagination: { limit, totalItems: response[1] },
    }

}
async activateproduct(payload: CreateProductDto): Promise<ServiceResponseHttpModel> {
    const newproduct = this.repository.create(payload);
    const productCreated = await this.repository.save(newproduct);

    return { data: plainToInstance(ReadProductDto, productCreated) };
  }
  
  async closeproduct(id: string): Promise<ServiceResponseHttpModel> {
    const product = await this.repository.findOneBy({ id });

    if (!product) {
        throw new NotFoundException("product not found");
    }
    const productDelete = await this.repository.softRemove(product);

    return { data: plainToInstance(ReadProductDto, productDelete) };
}

/*setEmail(){
if(!this.email){
   return;
}
this.email = this.email.toLowerCase().trim();

async hashPassword(){
    if(!this.password){
        return;
    }
    this.password = await Bcrypt.hash(this.password, 12);
}*/
}