

import { Global, Module } from '@nestjs/common';
@Global()
@Module({
    imports: [DatabaseModule],
    controllers: [
        ProductController,
        CategoryController
    ],
    providers: [
        ...ventaProviders,
        ProductService,
        CategoryService,
        
    ],
    exports:[],
})
export class VentaModule {}
