import { IReadableUserWithPhone } from "../entities/interfaces/user-with-phone.interface";
import { User } from "../entities/user.entity";
import { IUserWithPhoneRepository } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IUserWithPhoneFactory } from "./interfaces/user-with-phone.factory.interface";

export class UserWithPhoneFactory implements IUserWithPhoneFactory {
    constructor(private readonly userRepository: IUserWithPhoneRepository) { }

    async createWithPhone(id: number): Promise<IReadableUserWithPhone> {
        return new User(await this.userRepository.getWithPhoneById(id));
    }
}