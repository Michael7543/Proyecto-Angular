import { IsNumber, IsOptional, IsString } from 'class-validator';
import {PaginationDto} from 'core/dto';
import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions
  } from '@shared/validation';

import { title } from 'process';

//visualizar mediante paginas el nombre,cedula
export class FilterProductDto extends PaginationDto{
@IsOptional()
@IsString(isStringValidationOptions())
readonly title:string;
/* limit:number;
page:number;
search:string; */
@IsOptional()
@IsNumber(isNumberValidationOptions())
readonly categoryId:number;




@IsOptional()
@IsString({message:'el campo nomnbre debe ser string'})
    limit: number;
    page: number;


}


