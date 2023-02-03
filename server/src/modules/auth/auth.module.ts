import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { config } from '@config';
import { MenusController } from './controllers/menus.controller';
import { AuthController } from './controllers/auth.controller';
import { RolesController } from './controllers/roles.controller';
import { UsersController } from './controllers/users.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DatabaseModule } from 'src/database/seeds/database.module';
import { authProviders } from './providers/auth.providers';
import { AuthService } from './services/auth.service';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';
import { MenusService } from './services/menus.service';

@Global()
@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
          signOptions: {
            expiresIn: '10d',
          },
        };
      },
    }),
  ],
  controllers: [
    AuthController,
    MenusController,
    RolesController,
    UsersController,
  ],
  providers: [
    ...authProviders,
    JwtStrategy,
    AuthService,
    RolesService,
    UsersService,
    MenusService,
  ],
  exports: [UsersService, RolesService, MenusService],
})
export class AuthModule {}
