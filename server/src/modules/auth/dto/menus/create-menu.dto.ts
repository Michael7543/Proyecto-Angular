import { OmitType, PickType } from '@nestjs/swagger';
import { BaseMenuDto } from '@auth/dto';

export class CreateMenuDto extends OmitType(BaseMenuDto, []) {}
