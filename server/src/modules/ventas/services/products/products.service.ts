import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto, FilterProductDto, ReadProductDto } from 'src/modules-sv/dto';
import { ProductEntity } from 'src/modules-sv/entities/product.model';
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { Repository } from 'typeorm';
import { ServiceResponseHttpModel} from '@shared/models';
import { plainToInstance } from 'class-transformer';
import { response } from 'express';

@Injectable()
export class ProductsService {
    constructor(@Inject(RepositoryEnum.PRODUCT_REPOSITORY)
        private repository:Repository<ProductEntity>,
        ){}
   async create(payload:CreateProductDto):Promise<ServiceResponseHttpModel>{
        const newProduct = this.repository.create(payload); //se crea el producto
        const productCreated = this.repository.save(newProduct);//guardar el producto nuevo creado
        return {data:plainToInstance(ReadProductDto,productCreated)}//visualizamos
    }

   async catalogue():Promise<ServiceResponseHttpModel> {
    const newEvent = this.repository.findAndCount({take:1000});
    return{
        data:this.response[0],
        pagination:{totaItems: response[1],limit:10}
    };
   }

   async findAll(params?:FilterProductDto):Promise<ServiceResponseHttpModel>{
        if(params?.limit>0 && params?.page >=0)
        return await this.paginateAndFilter(params);
    }
    const response = await this.repository.findAndCount({
        order:{
            updateAt:'DESC'
        },
    });
    return{
        data:plainToInstance(ReadProductDto,response[0]),
            pagination:{totalItems:response[1],limit:10}
    }

    }

