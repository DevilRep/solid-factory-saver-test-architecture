import { AuthenticatedUser } from "../entities/authenticated-user"
import { IAuthenticatedUser } from "../entities/interfaces/authenticated-user.interface"
import { IAuthenticatedUserRepository } from "../repositories/interfaces/authenticated-user.repository.interface"
import { IAuthenticatedUserFactory } from "./interfaces/authenticated-user.factory.interface"

export class AuthenticatedUserFactory implements IAuthenticatedUserFactory {
    constructor(
        private readonly repository: IAuthenticatedUserRepository
    ) { }

    async createAuthenticatedUser(id: number): Promise<IAuthenticatedUser> {
        if (!await this.repository.isExist(id)) {
            throw new Error('User not found!')
        }

        return new AuthenticatedUser(id)
    }
}