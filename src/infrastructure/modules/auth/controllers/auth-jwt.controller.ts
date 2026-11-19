import { Controller, Inject, Post, Headers, Body } from '@nestjs/common'
import { Public } from '@nestjs/authentication'

import type {
    IAuthenticableUserWithJwtTokensFactory,
    IAuthenticatedUserByJwtRefreshTokenFactory
} from '@domain/user'
import { AuthenticatedUserWithJwtTokensDto } from '../dto/authenticated-user-with-jwt-tokens.dto'
import { SignInRawDataDto } from '../dto/sign-in-raw-data.dto'


@Public()
@Controller('auth/jwt')
export class AuthController {
    constructor(
        @Inject('IAuthenticableUserWithJwtTokensFactory')
        private readonly authenticableUserWithGeneratingJwtTokensFactory: IAuthenticableUserWithJwtTokensFactory,

        @Inject('IAuthenticatedUserByJwtRefreshTokenFactory')
        private readonly authenticatedUserWithJwtRefreshTokenFactory: IAuthenticatedUserByJwtRefreshTokenFactory
    ) { }

    @Post('/sign-in')
    public async signIn(
        @Body() { email, password }: SignInRawDataDto
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const user = await this.authenticableUserWithGeneratingJwtTokensFactory.createUserWithJwtTokensForSignIn(email)
        const tokens = await user.signIn(password)
        return new AuthenticatedUserWithJwtTokensDto(user, tokens)
    }

    @Post('/refresh-token')
    public async getNewTokensByRefreshToken(
        @Headers('Authorization') authToken: string
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const user = await this.authenticatedUserWithJwtRefreshTokenFactory.createAuthenticatedUserByJwtRefreshToken(authToken.split(' ')[1])
        const tokens = await user.generateNewAuthTokens()
        return new AuthenticatedUserWithJwtTokensDto(user, tokens)
    }
}
