import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common'
import { Public, SignInService } from '@nestjs/authentication'

import type { IAuthenticableUserFactory } from '@domain/user'

import { AuthenticatedUserDto } from '../dto/authenticated-user.dto'
import { SignInRawDataDto } from '../dto/sign-in-raw-data.dto'

@Public()
@Controller('auth/session')
export class SessionController {
    constructor(
        @Inject('IAuthenticableUserFactory')
        private readonly authenticableUserFactory: IAuthenticableUserFactory,
        private readonly signInService: SignInService
    ) { }

    @Post('/sign-in')
    @HttpCode(200)
    public async signIn(
        @Body() { email, password }: SignInRawDataDto
    ): Promise<AuthenticatedUserDto> {
        const user = await this.authenticableUserFactory.createUserForSignIn(email)
        await user.signIn(password)

        await this.signInService.signIn(user.id.toString(), { method: 'password' })

        return new AuthenticatedUserDto(user)
    }
}
