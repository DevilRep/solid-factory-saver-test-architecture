import { IReadableUserWithPhone } from "@domain/user";

/**
 * @deprecated
 */
export class UserWithPhoneDto {
    readonly email: string;
    readonly phone?: string;
    readonly name: string;

    constructor({ email, phone, name }: IReadableUserWithPhone) {
        this.email = email;
        this.name = name;

        if (phone) {
            this.phone = phone;
        }
    }
}