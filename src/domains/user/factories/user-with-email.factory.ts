import { IReadableUserWithEmail } from "../entities/interfaces/user-with-email.interface";
import { User } from "../entities/user.entity";
import { Email } from "../object-values/email";
import { IUserRepository } from "../repositories/interfaces/user.repository.interface";
import { IUserWithEmailFactory } from "./interfaces/user-with-email.factory.interface";

export class UserWithEmailFactory implements IUserWithEmailFactory {
    constructor(private readonly repository: IUserRepository) { }

    async createUserWithEmail(id: number): Promise<IReadableUserWithEmail> {
        const { name, email } = await this.repository.getById(id);

        return new User({
            id,
            name,
            emailVO: new Email(email)
        });
    }
}