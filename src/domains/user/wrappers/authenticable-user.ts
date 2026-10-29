import { IAuthenticatedUser } from "../entities/interfaces/authenticated-user.interface"
import { Password } from "../object-values/password"
import { IAuthenticableUser } from "./interfaces/authenticable-user.interface"

export class AuthenticableUser implements IAuthenticableUser {
    constructor(
        protected readonly user: IAuthenticatedUser,
        protected readonly hashedPassword: Password
    ) { }

    get id() {
        return this.user.id
    }

    async signIn(password: string): Promise<void> {
        const providedPassword = await Password.fromString(password)

        if (!await this.hashedPassword.isEqual(providedPassword)) {
            throw new Error('Wrong auth info')
        }
    }
}