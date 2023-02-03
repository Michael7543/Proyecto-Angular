import { PartialType } from '@nestjs/swagger';
import { BaseMenuDto } from '@auth/dto';

export class UpdateMenuDto extends PartialType(BaseMenuDto) {}
