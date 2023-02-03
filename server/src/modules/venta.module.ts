
import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/seeds/database.module';
import { CategoryController } from './ventas/controllers/category.controller';
import { ProductsController } from './ventas/controllers/product.controller';
import { ventaProviders } from './ventas/providers/venta_provider';
import { CategoryService } from './ventas/services/category.service';
import { ProductsService } from './ventas/services/products.service';



@Global()
@Module({
    imports: [DatabaseModule],
    controllers: [
        ProductsController,
        CategoryController
    ],
    providers: [
        ...ventaProviders,
        ProductsService,
        CategoryService,
        
    ],
    exports:[],
})
export class VentaModule {}
