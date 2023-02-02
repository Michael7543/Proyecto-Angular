
import { RepositoryEnum } from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../entities/category.model';
import { ProductEntity } from '../entities/product.model';

export const ventaProviders = [
    {
        provide: RepositoryEnum.PRODUCT_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(ProductEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.CATEGORY_REPOSITORY,
        userFactory: (dataSource: DataSource) =>
            dataSource.getRepository(CategoryEntity),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
    }
]