import { AuthJwtTokens, IAuthenticatedUser } from "@domain/user"

interface IAuthJwtTokens {
    accessToken: string
    refreshToken: string
}

export class AuthenticatedUserWithJwtTokensDto {
    readonly id!: number
    readonly accessToken!: string
    readonly refreshToken!: string

    constructor(user: IAuthenticatedUser, tokens: AuthJwtTokens | IAuthJwtTokens) {
        this.id = user.id

        if (tokens instanceof AuthJwtTokens) {
            this.accessToken = tokens.accessToken.encrypted
            this.refreshToken = tokens.refreshToken.encrypted
        } else {
            this.accessToken = tokens.accessToken
            this.refreshToken = tokens.refreshToken
        }
    }
}