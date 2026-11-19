import { Module } from '@nestjs/common'

import { UserModule } from '../user/user.module'
import { AuthModule } from '../auth/auth.module'
import { AuthenticationModule } from '@nestjs/authentication'

@Module({
  imports: [
    AuthenticationModule.forRoot({
      session: {
        absoluteTtl: '7d',
        idleTtl: '1d'
      }
    }),

    UserModule,
    AuthModule
  ],
})
export class AppModule { }
