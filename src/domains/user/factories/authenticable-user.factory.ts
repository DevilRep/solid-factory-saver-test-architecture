import { AuthenticatedUser } from "../entities/authenticated-user"
import { IAuthenticableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { Email } from "../value-object/email"
import { Password } from "../value-object/password"
import { AuthenticableUser } from "../wrappers/authenticable-user"
import { IAuthenticableUser } from "../wrappers/interfaces/authenticable-user.interface"
import { IAuthenticableUserFactory } from "./interfaces/authenticable-user.factory.interface"

export class AuthenticableUserFactory implements IAuthenticableUserFactory {
    constructor(
        private readonly repository: IAuthenticableUserRepository
    ) { }

    async createUserForSignIn(email: string): Promise<IAuthenticableUser> {
        const { id, password } = await this.repository.getUserWithPassword((new Email(email)).value)

        return new AuthenticableUser(
            new AuthenticatedUser(id),
            await Password.fromHashedString(password)
        )
    }
}