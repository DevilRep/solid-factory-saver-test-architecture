import { IAuthenticableUserWithJwtTokensRawData, IAuthenticableUserWithJwtTokensSaver } from "../savers/interfaces/authenticable-user-with-jwt-tokens.saver.interface"
import { AuthJwtTokens } from "../value-object/auth-jwt-tokens"
import { JwtToken } from "../value-object/jwt-token"
import { IAuthenticableUserWithJwtTokens } from "./interfaces/authenticable-user-with-jwt-tokens.interface"
import { IAuthenticableUser } from "./interfaces/authenticable-user.interface"

export class AuthenticableUserWithGettingJwtTokens implements IAuthenticableUserWithJwtTokens {
    constructor(
        protected readonly user: IAuthenticableUser,
        protected readonly saver: IAuthenticableUserWithJwtTokensSaver
    ) { }

    get id(): number {
        return this.user.id
    }

    async signIn(password: string): Promise<AuthJwtTokens> {
        await this.user.signIn(password)

        const tokens = await this.saver.generateJwtTokens(this.id)

        return new AuthJwtTokens(
            await JwtToken.fromEncryptedToken(tokens.accessToken),
            await JwtToken.fromEncryptedToken(tokens.refreshToken)
        )
    }
}