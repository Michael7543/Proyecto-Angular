import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@auth/guards';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RoleEntity } from '@auth/entities';

export function Auth(...roles: RoleEntity[]) {
  return applyDecorators(UseGuards(JwtGuard), ApiBearerAuth());
}
