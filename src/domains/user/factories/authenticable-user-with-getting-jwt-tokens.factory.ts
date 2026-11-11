import { AuthenticatedUser } from "../entities/authenticated-user"
import { IAuthenticableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { IAuthenticableUserWithJwtTokensSaver } from "../savers/interfaces/authenticable-user-with-jwt-tokens.saver.interface"
import { Email } from "../value-object/email"
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

    async createUserWithJwtTokensForSignIn(email: string): Promise<IAuthenticableUserWithJwtTokens> {
        const { id, password } = await this.repository.getUserWithPassword((new Email(email)).value)

        return new AuthenticableUserWithGettingJwtTokens(
            new AuthenticableUser(
                new AuthenticatedUser(id),
                await Password.fromHashedString(password)
            ),
            this.saver
        )
    }
}