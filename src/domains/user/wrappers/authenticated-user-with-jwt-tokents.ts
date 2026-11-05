import { IAuthenticatedUser } from "../entities/interfaces/authenticated-user.interface";
import { AuthJwtTokens } from "../value-object/auth-jwt-tokens";
import { IAuthenticatedUserWithJwtTokens } from "./interfaces/authenticated-user-with-jwt-tokens.interface";

export class AuthenticatedUserWithJwtTokens implements IAuthenticatedUserWithJwtTokens {
    constructor(
        protected readonly user: IAuthenticatedUser
    ) { }

    get id(): number {
        return this.user.id
    }

    async generateNewAuthTokens(): Promise<AuthJwtTokens> {
        return AuthJwtTokens.fromRawData({
            userId: this.user.id
        })
    }
}