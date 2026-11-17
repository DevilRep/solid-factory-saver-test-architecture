import { AuthJwtTokens, IAuthenticatedUser } from "@domain/user"

export class AuthenticatedUserWithJwtTokensDto {
    readonly id!: number
    readonly accessToken!: string
    readonly refreshToken!: string

    constructor(user: IAuthenticatedUser, tokens: AuthJwtTokens) {
        this.id = user.id
        this.accessToken = tokens.accessToken.encrypted
        this.refreshToken = tokens.refreshToken.encrypted
    }
}