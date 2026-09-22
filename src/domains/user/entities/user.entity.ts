import { IUserRepositoryData } from "../repositories/interfaces/user.repository.interface";
import { IReadableUser } from "./interfaces/user.interface";

export class User implements IReadableUser {
    public readonly id: number
    public readonly email: string

    constructor(data: IUserRepositoryData) {
        this.id = data.id;
        this.email = data.email;
    }
}