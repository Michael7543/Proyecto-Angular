
import { Exclude, Expose } from 'class-transformer';
import { BaseProductDto } from './base-product.dto';

@Exclude()
export class ReadProductDto extends BaseProductDto {
  //exponer el valor del atributo
  @Expose()
  readonly title;

  @Expose()
  readonly description;

  @Expose()
  readonly price;

  @Expose()
  readonly categoryId;

  @Expose()
  readonly images;

}