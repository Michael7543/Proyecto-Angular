/* eslint-disable prettier/prettier */
import { IsInt, IsPositive } from "class-validator";
import { BaseProductDto } from "./base-product.dto";
import {
    isBooleanValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    IsArrayValidationOptions,
    isPositiveValidationOptions,
    IsIntValidationOptions

  } from '@shared/validation';

//extends accede a los atributos de la clase padre
export class CreateProductDto extends BaseProductDto{

    

    

}