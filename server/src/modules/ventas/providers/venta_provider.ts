import { CategoryEntity } from 'src/modules-sv/entities/category.model';
import { ProductEntity } from 'src/modules-sv/entities/product.model';
import { DataSource } from 'typeorm';

export ventaProviders = [
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