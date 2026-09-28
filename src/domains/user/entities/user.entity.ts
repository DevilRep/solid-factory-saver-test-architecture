import { IUserRepositoryData } from "../repositories/interfaces/user.repository.interface";
import { IUserWithPhoneRepositoryData } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IReadableUserWithPhone } from "./interfaces/user-with-phone.interface";
import { IWritableUser } from "./interfaces/writable-user.interface";

export class User implements IReadableUserWithPhone, IWritableUser {
    public readonly id: number
    public readonly email: string
    public readonly phone: string
    public name: string

    constructor(data: IUserRepositoryData | IUserWithPhoneRepositoryData) {
        this.id = data.id
        this.email = data.email

        this.phone = 'phone' in data ? data.phone : ''
        this.name = data.name || ''
    }
}