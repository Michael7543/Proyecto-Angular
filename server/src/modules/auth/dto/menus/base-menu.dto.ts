import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import {
  isBooleanValidationOptions,
  isNotEmptyValidationOptions,
  isStringValidationOptions,
} from '@shared/validation';
import { MenuTypeEnum } from '@auth/enums';
import { MenuEntity } from '@auth/entities';

export class BaseMenuDto {
  @IsOptional()
  readonly parent: MenuEntity;

  @IsOptional()
  readonly children: MenuEntity[];

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly code: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly icon: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsBoolean(isBooleanValidationOptions())
  readonly isVisible: boolean;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly label: string;

  @IsOptional()
  @IsString(isStringValidationOptions())
  readonly routerLink: string;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly type: MenuTypeEnum;
}
