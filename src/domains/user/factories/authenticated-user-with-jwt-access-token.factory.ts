import { IAuthenticatedUser } from "../entities/interfaces/authenticated-user.interface"
import { JwtToken } from "../value-object/jwt-token"
import { IAuthenticatedUserByJwtAccessTokenFactory } from "./interfaces/authenticated-user-by-jwt-access-token.factory.interface"
import { IAuthenticatedUserFactory } from "./interfaces/authenticated-user.factory.interface"

export class AuthenticatedUserWithJwtAccessTokenFactory implements IAuthenticatedUserByJwtAccessTokenFactory {
    constructor(
        private readonly authenticatedUserFactory: IAuthenticatedUserFactory,
    ) { }

    async createAuthenticatedUserByJwtAccessToken(jwtAccessToken: string): Promise<IAuthenticatedUser> {
        const jwtToken = await JwtToken.fromEncryptedToken(jwtAccessToken)

        return this.authenticatedUserFactory.createAuthenticatedUser(jwtToken.data.userId)
    }
}