import { Module } from '@nestjs/common'
import { AuthenticationModule } from '@nestjs/authentication'

import { UserModule } from '../user/user.module'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    AuthenticationModule.forRootAsync({
      useFactory: () => ({
        session: {
          absoluteTtl: '7d',
          idleTtl: '1d'
        },
        accessToken: {
          key: process.env.JWT_SECRET!,
          issuer: 'http://localhost',
          audience: 'jwt',
          ttl: '15m'
        }
      })
    }),

    UserModule,
    AuthModule
  ],
})
export class AppModule { }
