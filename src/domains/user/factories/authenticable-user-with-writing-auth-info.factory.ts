import { AuthenticatedUser } from "../entities/authenticated-user"
import { Password } from "../object-values/password"
import { IAuthentificableUserRepository } from "../repositories/interfaces/authenticable-user.repository.interface"
import { IAuthenticableUserSaver } from "../savers/interfaces/authenticable-user.saver.interface"
import { AuthenticableUser } from "../wrappers/authenticable-user"
import { AuthenticableUserWithSavingInfo } from "../wrappers/authenticable-user-with-saving-info"
import { IAuthenticableUser } from "../wrappers/interfaces/authenticable-user.interface"
import { IAuthenticableUserFactory } from "./interfaces/authenticable-user.factory.interface"

export class AuthenticableUserWithWritingAuthInfoFactory implements IAuthenticableUserFactory {
    constructor(
        private readonly repository: IAuthentificableUserRepository,
        private readonly saver: IAuthenticableUserSaver
    ) { }

    async createUserForSignIn(id: number): Promise<IAuthenticableUser> {
        const { password } = await this.repository.getUserWithPassword(id)

        return new AuthenticableUserWithSavingInfo(
            new AuthenticableUser(
                new AuthenticatedUser(id),
                await Password.fromHashedString(password)
            ),
            this.saver
        )
    }
}