import { IReadableUserWithEmailAndPhone } from "@domain/user";

export class UserWithEmailAndPhoneDto {
    readonly email: string;
    readonly name: string;
    readonly phone?: string;

    constructor({ emailVO, name, phone }: IReadableUserWithEmailAndPhone) {
        this.email = emailVO.value;
        this.name = name;
        if (phone) {
            this.phone = phone;
        }
    }
}