import { IsNumber, IsOptional, IsString } from 'class-validator';

import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions
  } from 'src/shared/validation/validations-message';


export class FilterCategoryDto{
@IsOptional()
@IsString(isStringValidationOptions())
readonly name:string;
/* limit:number;
page:number;
search:string; */
@IsOptional()
@IsNumber(isNumberValidationOptions())
readonly id:number;

}

