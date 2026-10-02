import { IReadableUserWithPhone } from "./interfaces/user-with-phone.interface";
import { IWritableUser } from "./interfaces/writable-user.interface";
import { IReadableUserWithEmail } from "./interfaces/user-with-email.interface";
import { IWritableUserWithEmail } from "./interfaces/writable-user-with-email.interface";
import { Email } from "../object-values/email";

interface IUserData {
    readonly id: number;
    readonly email?: string;
    readonly phone?: string;
    readonly name?: string;

    readonly emailVO?: Email
}

export class User implements IReadableUserWithPhone, IWritableUser, IReadableUserWithEmail, IWritableUserWithEmail {
    public readonly id: number

    /**
     * @deprecated use emailVO instead
     */
    get email(): string {
        return this.emailVO.value
    }

    public phone: string

    public name: string

    public emailVO: Email

    constructor(data: IUserData) {
        this.id = data.id

        this.phone = data.phone || ''
        this.name = data.name || ''

        if (data.emailVO) {
            this.emailVO = data.emailVO
        } else {
            this.emailVO = data.email ? new Email(data.email) : this.emailVO = new Email('')
        }
    }
}