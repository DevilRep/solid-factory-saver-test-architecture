import { IReadableUserWithEmailAndPhone } from "../entities/interfaces/user-with-email-and-phone.interface";
import { User } from "../entities/user.entity";
import { Email } from "../object-values/email";
import { IUserWithPhoneRepository } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IUserWithEmailAndPhoneFactory } from "./interfaces/user-with-email-and-phone.interface";

export class UserWithEmailAndPhoneFactory implements IUserWithEmailAndPhoneFactory {
    constructor(
        private readonly repository: IUserWithPhoneRepository,
    ) { }

    public async createUserWithEmailAndPhone(id: number): Promise<IReadableUserWithEmailAndPhone> {
        const { name, phone, email } = await this.repository.getWithPhoneById(id);

        return new User({
            id: id,
            name,
            phone,
            emailVO: new Email(email)
        });
    }
}