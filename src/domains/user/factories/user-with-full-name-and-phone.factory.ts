import { IReadableUserWithFullNameAndPhone } from "../entities/interfaces/user-with-full-name-and-phone.interface"
import { User } from "../entities/user.entity"
import { Email } from "../object-values/email"
import { FullName } from "../object-values/full-name"
import { IUserWithFullNameAndPhoneRepository } from "../repositories/interfaces/user-with-full-name-and-phone.repository.interface"
import { IUserWithFullNameAndPhoneFactory } from "./interfaces/user-with-full-name-and-phone.factory.interface"

export class UserWithFullNameAndPhoneFactory implements IUserWithFullNameAndPhoneFactory {
    constructor(
        private readonly repository: IUserWithFullNameAndPhoneRepository
    ) { }

    async createUserWithFullNameAndPhone(id: number): Promise<IReadableUserWithFullNameAndPhone> {
        const { firstName, lastName, phone, email } = await this.repository.getUserWithFullNameAndPhoneById(id)

        return new User({
            id,
            emailVO: new Email(email),
            fullNameVO: new FullName(firstName, lastName),
            phone
        })
    }
}