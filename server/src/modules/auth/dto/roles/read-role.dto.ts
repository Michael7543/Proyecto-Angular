import { Exclude, Expose } from 'class-transformer';
import { RoleDto } from './role.dto';

@Exclude()
export class ReadRoleDto extends RoleDto {
  @Expose()
  readonly id;

  @Expose()
  readonly code;

  @Expose()
  readonly name;
}
