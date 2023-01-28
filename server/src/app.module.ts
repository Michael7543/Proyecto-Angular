import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductsService } from './modules-sv/products/products.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProductService, ProductsService],
})
export class AppModule {}
