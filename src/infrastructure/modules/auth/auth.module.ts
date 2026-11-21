import { Module } from '@nestjs/common'

import { AuthController } from './controllers/auth-jwt.controller'
import { AuthJwtNestController } from './controllers/auth-jwt-nest.controller'
import { SessionController } from './controllers/session.controller'

import { AuthenticatedUserWithJwtRefreshTokenInjectableFactory } from './dependencies/authenticated-user-with-jwt-refresh-token.injectable.factory'
import { AuthenticableUserWithGeneratingJwtTokensInjectableFactory } from './dependencies/authenticable-user-with-generating-jwt-tokens.injectable.factory'
import { AuthenticatedUserInjectableFactory } from './dependencies/authenticated-user.injectable.factory'
import { AuthenticableUserInjectableFactory } from './dependencies/authenticable-user.injectable.factory'

import { UserMemoryInjectableRepository } from '../user-repository/dependencies/user.memory.injectable.repository'
import { UserRepositoryModule } from '../user-repository/user-repository.module'
import { SessionAuthProvider } from './providers/session-auth.provider'
import { JwtAuthProvider } from './providers/jwt-auth.provider'

@Module({
  imports: [UserRepositoryModule],
  controllers: [AuthController, SessionController, AuthJwtNestController],
  providers: [
    SessionAuthProvider,
    JwtAuthProvider,

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
      provide: 'IAuthenticableUserFactory',
      useClass: AuthenticableUserInjectableFactory
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
