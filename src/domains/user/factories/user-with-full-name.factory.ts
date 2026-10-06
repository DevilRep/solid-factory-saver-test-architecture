import { IReadableUserWithFullName } from "../entities/interfaces/user-with-full-name.interface";
import { User } from "../entities/user.entity";
import { Email } from "../object-values/email";
import { FullName } from "../object-values/full-name";
import { IUserWithFullNameRepository } from "../repositories/interfaces/user-with-full-name.repository.interface";
import { IUserWithFullNameFactory } from "./interfaces/user-with-full-name.factory.interface";

export class UserWithFullNameFactory implements IUserWithFullNameFactory {
    constructor(
        private readonly repository: IUserWithFullNameRepository
    ) { }

    public async createUserWithFullName(id: number): Promise<IReadableUserWithFullName> {
        const { email, firstName, lastName } = await this.repository.getUserWithFullNameById(id);

        return new User({
            id,
            emailVO: new Email(email),
            fullNameVO: new FullName(firstName, lastName)
        })
    }
}