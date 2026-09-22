import { IReadableUserWithPhone } from "@domain/user";

export class UserWithPhoneDto {
    readonly email: string;
    readonly phone?: string;

    constructor({ email, phone }: IReadableUserWithPhone) {
        this.email = email;
        if (phone) {
            this.phone = phone;
        }
    }
}