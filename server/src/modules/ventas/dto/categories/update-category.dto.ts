import { PartialType } from "@nestjs/swagger";
import { BaseCategoryDto } from "./base-category.dto";
    


export class UpdateCategoryDto extends PartialType(BaseCategoryDto)  {
    
}