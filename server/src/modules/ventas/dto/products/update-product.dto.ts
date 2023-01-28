import { BaseProductDto } from "./base-product.dto";
import {PartialType} from '@nestjs/swagger';


export class UpdateProductDto extends PartialType(BaseProductDto){
    
    

}