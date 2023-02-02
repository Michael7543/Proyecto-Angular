import { BaseCategoryDto } from "./base-category.dto";
import { Exclude, Expose } from 'class-transformer';



export class ReadCategoryDto extends BaseCategoryDto {
    @Expose()
    readonly id;
  
    @Expose()
    readonly description;

    @Expose()
    readonly name;
  

    
}