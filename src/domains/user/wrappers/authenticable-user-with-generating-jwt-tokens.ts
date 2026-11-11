import { AuthJwtTokens } from "../value-object/auth-jwt-tokens"
import { IAuthenticableUserWithJwtTokens } from "./interfaces/authenticable-user-with-jwt-tokens.interface"
import { IAuthenticableUser } from "./interfaces/authenticable-user.interface"

export class AuthenticableUserWithGeneratingJwtTokens implements IAuthenticableUserWithJwtTokens {
    constructor(
        protected readonly user: IAuthenticableUser,
    ) { }

    get id(): number {
        return this.user.id
    }

    async signIn(password: string): Promise<AuthJwtTokens> {
        await this.user.signIn(password)

        return AuthJwtTokens.fromRawData({
            userId: this.user.id
        })
    }
}