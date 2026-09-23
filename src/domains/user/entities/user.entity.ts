import { IUserRepositoryData } from "../repositories/interfaces/user.repository.interface";
import { IUserWithPhoneRepositoryData } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IReadableUserWithPhone } from "./interfaces/user-with-phone.interface";

export class User implements IReadableUserWithPhone {
    public readonly id: number
    public readonly email: string
    public readonly phone: string
    public readonly name: string

    constructor(data: IUserRepositoryData | IUserWithPhoneRepositoryData) {
        this.id = data.id
        this.email = data.email

        this.phone = 'phone' in data ? data.phone : ''
        this.name = data.name || ''
    }
}