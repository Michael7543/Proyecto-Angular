import { PickType } from '@nestjs/swagger';
import { RoleDto } from './role.dto';

export class CreateRoleDto extends PickType(RoleDto, ['code', 'name']) {}
