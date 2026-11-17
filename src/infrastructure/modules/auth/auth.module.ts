import { Module } from '@nestjs/common'

import { AuthController } from './controllers/auth-jwt.controller'

import { AuthenticatedUserWithJwtRefreshTokenInjectableFactory } from './dependencies/authenticated-user-with-jwt-refresh-token.injectable.factory'
import { AuthenticableUserWithGeneratingJwtTokensInjectableFactory } from './dependencies/authenticable-user-with-generating-jwt-tokens.injectable.factory'
import { AuthenticatedUserInjectableFactory } from './dependencies/authenticated-user.injectable.factory'

import { UserMemoryInjectableRepository } from '../user-repository/dependencies/user.memory.injectable.repository'
import { UserRepositoryModule } from '../user-repository/user-repository.module'

@Module({
  imports: [UserRepositoryModule],
  controllers: [AuthController],
  providers: [
    {
      provide: 'IAuthenticatedUserByJwtRefreshTokenFactory',
      useClass: AuthenticatedUserWithJwtRefreshTokenInjectableFactory
    },
    {
      provide: 'IAuthenticableUserWithJwtTokensFactory',
      useClass: AuthenticableUserWithGeneratingJwtTokensInjectableFactory
    },
    {
      provide: 'IAuthenticatedUserFactory',
      useClass: AuthenticatedUserInjectableFactory
    },

    {
      provide: 'IAuthenticableUserRepository',
      useExisting: UserMemoryInjectableRepository
    },
    {
      provide: 'IAuthenticatedUserRepository',
      useExisting: UserMemoryInjectableRepository
    },
  ],
})
export class AuthModule { }
