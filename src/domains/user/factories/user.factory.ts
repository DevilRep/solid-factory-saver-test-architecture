import { IReadableUser } from "../entities/interfaces/user.interface";
import { User } from "../entities/user.entity";
import { IUserRepository } from "../repositories/interfaces/user.repository.interface";
import { IUserFactory } from "./interfaces/user.factory.interface";

export class UserFactory implements IUserFactory {
    constructor(private readonly userRepository: IUserRepository) { }

    async create(id: number): Promise<IReadableUser> {
        return new User(await this.userRepository.getById(id));
    }
}