import { AuthenticatedUser } from "../entities/authenticated-user"
import { Password } from "../value-object/password"
import { IAuthenticableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { IAuthenticableUserSaver } from "../savers/interfaces/authenticable-user.saver.interface"
import { AuthenticableUser } from "../wrappers/authenticable-user"
import { AuthenticableUserWithSavingInfo } from "../wrappers/authenticable-user-with-saving-info"
import { IAuthenticableUser } from "../wrappers/interfaces/authenticable-user.interface"
import { IAuthenticableUserFactory } from "./interfaces/authenticable-user.factory.interface"
import { Email } from "../value-object/email"

export class AuthenticableUserWithWritingAuthInfoFactory implements IAuthenticableUserFactory {
    constructor(
        private readonly repository: IAuthenticableUserRepository,
        private readonly saver: IAuthenticableUserSaver
    ) { }

    async createUserForSignIn(email: string): Promise<IAuthenticableUser> {
        const { id, password } = await this.repository.getUserWithPassword((new Email(email)).value)

        return new AuthenticableUserWithSavingInfo(
            new AuthenticableUser(
                new AuthenticatedUser(id),
                await Password.fromHashedString(password)
            ),
            this.saver
        )
    }
}