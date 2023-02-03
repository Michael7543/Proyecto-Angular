import { Exclude, Expose } from 'class-transformer';
import { UserDto } from '@auth/dto';

@Exclude()
export class ReadUserDto extends UserDto {
  @Expose()
  readonly id;

  @Expose()
  readonly email;

  @Expose()
  readonly activatedAt;

  @Expose()
  readonly lastname;

  @Expose()
  readonly maxAttempts;

  @Expose()
  readonly name;

  @Expose()
  readonly roles;

  @Expose()
  readonly suspendedAt;

  @Expose()
  readonly username;
}
