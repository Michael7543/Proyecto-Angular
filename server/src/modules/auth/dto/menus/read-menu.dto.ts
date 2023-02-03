import { Exclude, Expose } from 'class-transformer';
import { BaseMenuDto } from '@auth/dto';

@Exclude()
export class ReadMenuDto extends BaseMenuDto {
  @Expose()
  readonly id;

  @Expose()
  readonly icon;

  @Expose()
  readonly isVisible;

  @Expose()
  readonly name;

  @Expose()
  readonly routerLink;

  @Expose()
  readonly type;
}
