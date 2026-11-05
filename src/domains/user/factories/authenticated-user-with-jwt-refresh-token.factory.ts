import { JwtToken } from "../value-object/jwt-token"
import { AuthenticatedUserWithJwtTokens } from "../wrappers/authenticated-user-with-jwt-tokents"
import { IAuthenticatedUserWithJwtTokens } from "../wrappers/interfaces/authenticated-user-with-jwt-tokens.interface"
import { IAuthenticatedUserByJwtRefreshTokenFactory } from "./interfaces/authenticated-user-by-jwt-refresh-token.factory.interface"
import { IAuthenticatedUserFactory } from "./interfaces/authenticated-user.factory.interface"

export class AuthenticatedUserWithJwtRefreshTokenFactory implements IAuthenticatedUserByJwtRefreshTokenFactory {
    constructor(
        private readonly authenticatedUserFactory: IAuthenticatedUserFactory
    ) { }

    async createAuthenticatedUserByJwtRefreshToken(jwtRefreshToken: string): Promise<IAuthenticatedUserWithJwtTokens> {
        const jwtToken = await JwtToken.fromEncryptedToken(jwtRefreshToken)

        return new AuthenticatedUserWithJwtTokens(
            await this.authenticatedUserFactory.createAuthenticatedUser(jwtToken.data.userId)
        )
    }
}