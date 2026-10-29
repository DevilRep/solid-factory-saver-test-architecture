import { IAuthenticableUserSaver } from "../savers/interfaces/authenticable-user.saver.interface";
import { IAuthenticableUser } from "./interfaces/authenticable-user.interface"

export class AuthenticableUserWithSavingInfo implements IAuthenticableUser {
    constructor(
        protected readonly user: IAuthenticableUser,
        protected readonly saver: IAuthenticableUserSaver
    ) { }

    get id() {
        return this.user.id
    }

    async signIn(password: string): Promise<void> {
        await this.user.signIn(password)

        await this.saver.saveAuthenticationInfo(this.id)
    }
}