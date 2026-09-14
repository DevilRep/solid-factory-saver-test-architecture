import { IUser } from "../entities/interfaces/user.interface";
import { User } from "../entities/user.entity";
import { IUserRepository } from "../repositories/interfaces/user.repository.interface";
import { IUserFactory } from "./interfaces/user.factory.interface";

export class UserFactory implements IUserFactory {
    constructor(private readonly userRepository: IUserRepository) { }

    async create(id: number): Promise<IUser> {
        const { id: userId, email } = await this.userRepository.getById(id);
        return new User(userId, email);
    }
}