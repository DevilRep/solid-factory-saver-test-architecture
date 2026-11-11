import { AuthenticatedUser } from "../entities/authenticated-user"
import { IAuthenticableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { IAuthenticableUserWithJwtTokensSaver } from "../savers/interfaces/authenticable-user-with-jwt-tokens.saver.interface"
import { Password } from "../value-object/password"
import { AuthenticableUser } from "../wrappers/authenticable-user"
import { AuthenticableUserWithGettingJwtTokens } from "../wrappers/authenticable-user-with-getting-jwt-tokens"
import { IAuthenticableUserWithJwtTokens } from "../wrappers/interfaces/authenticable-user-with-jwt-tokens.interface"
import { IAuthenticableUserWithJwtTokensFactory } from "./interfaces/authenticable-user-with-jwt-tokens.factory.interface"

export class AuthenticableUserWithGettingJwtTokensFactory implements IAuthenticableUserWithJwtTokensFactory {
    constructor(
        private readonly repository: IAuthenticableUserRepository,
        private readonly saver: IAuthenticableUserWithJwtTokensSaver
    ) { }

    async createUserWithJwtTokensForSignIn(id: number): Promise<IAuthenticableUserWithJwtTokens> {
        const { password } = await this.repository.getUserWithPassword(id)

        return new AuthenticableUserWithGettingJwtTokens(
            new AuthenticableUser(
                new AuthenticatedUser(id),
                await Password.fromHashedString(password)
            ),
            this.saver
        )
    }
}