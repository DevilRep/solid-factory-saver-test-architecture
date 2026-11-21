import { Controller, Inject, Body, Post, Headers } from '@nestjs/common'
import { CurrentUser, Public, TokenService } from '@nestjs/authentication'

import type { IAuthenticableUserFactory, IAuthenticatedUser } from '@domain/user'

import { AuthenticatedUserWithJwtTokensDto } from '../dto/authenticated-user-with-jwt-tokens.dto'
import { SignInRawDataDto } from '../dto/sign-in-raw-data.dto'

@Public()
@Controller('auth/jwt-nest')
export class AuthJwtNestController {
    constructor(
        @Inject('IAuthenticableUserFactory')
        private readonly authenticableUserFactory: IAuthenticableUserFactory,

        private readonly tokenService: TokenService
    ) { }

    @Post('/sign-in')
    public async signIn(
        @Body() { email, password }: SignInRawDataDto
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const user = await this.authenticableUserFactory.createUserForSignIn(email)
        await user.signIn(password)

        const tokens = await this.tokenService.issue(user.id.toString(), {
            method: 'password',
            claims: {
                amr: ['pwd']
            }
        })

        return new AuthenticatedUserWithJwtTokensDto(user, {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        })
    }

    @Post('/refresh-token')
    public async getNewTokensByRefreshToken(
        @Headers('Authorization') refreshToken: string,
        @CurrentUser() authenticatedUser: IAuthenticatedUser
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const tokens = await this.tokenService.refresh(refreshToken)

        return new AuthenticatedUserWithJwtTokensDto(authenticatedUser, {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken
        })
    }
}
