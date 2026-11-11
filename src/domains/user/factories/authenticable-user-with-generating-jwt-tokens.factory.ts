import { AuthenticatedUser } from "../entities/authenticated-user"
import { IAuthenticableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { Password } from "../value-object/password"
import { AuthenticableUser } from "../wrappers/authenticable-user"
import { AuthenticableUserWithGeneratingJwtTokens } from "../wrappers/authenticable-user-with-generating-jwt-tokens"
import { IAuthenticableUserWithJwtTokens } from "../wrappers/interfaces/authenticable-user-with-jwt-tokens.interface"
import { IAuthenticableUserWithJwtTokensFactory } from "./interfaces/authenticable-user-with-jwt-tokens.factory.interface"

export class AuthenticableUserWithGeneratingJwtTokensFactory implements IAuthenticableUserWithJwtTokensFactory {
    constructor(
        private readonly repository: IAuthenticableUserRepository
    ) { }

    async createUserWithJwtTokensForSignIn(id: number): Promise<IAuthenticableUserWithJwtTokens> {
        const { password } = await this.repository.getUserWithPassword(id)

        return new AuthenticableUserWithGeneratingJwtTokens(
            new AuthenticableUser(
                new AuthenticatedUser(id),
                await Password.fromHashedString(password)
            )
        )
    }
}