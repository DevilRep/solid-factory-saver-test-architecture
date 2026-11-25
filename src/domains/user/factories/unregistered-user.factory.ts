import { IUnregisteredUser } from "../entities/interfaces/unregistered-user.interface"
import { PotentialSameUser } from "../entities/potential-same-user"
import { UnregisteredUser } from "../entities/unregistered-user"
import { IPotentialSameUserRawData, IPotentialSameUserRepository } from "../repositories/interfaces/potential-same-user.repository.interface"
import { ISignUpUserSaver } from "../savers/interfaces/sign-up-user.saver.interface"
import { Email } from "../value-object/email"
import { FullName } from "../value-object/full-name"
import { IUnregisteredUserFactory, IUnregisteredUserRawData } from "./interfaces/unregistered-user.factory.interface"

export class UnregisteredUserFactory implements IUnregisteredUserFactory {
    constructor(
        private readonly repository: IPotentialSameUserRepository,
        private readonly saver: ISignUpUserSaver
    ) { }

    async createUnregisteredUser({ email, firstName, lastName }: IUnregisteredUserRawData): Promise<IUnregisteredUser> {
        let potentialSameUser: IPotentialSameUserRawData | null = null
        try {
            potentialSameUser = await this.repository.getUserByEmail(email)
        } catch (error) { }

        return new UnregisteredUser(
            new Email(email),
            new FullName(firstName, lastName),
            this.saver,
            potentialSameUser ? new PotentialSameUser(potentialSameUser.id, new Email(potentialSameUser.email)) : undefined
        )
    }
}