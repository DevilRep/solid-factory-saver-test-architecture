import { IReadableUserWithEmail } from "./interfaces/user-with-email.interface";
import { Email } from "../object-values/email";

interface IUserData {
    readonly id: number;
    readonly phone?: string;
    readonly name?: string;

    readonly emailVO: Email
}

export class User implements IReadableUserWithEmail {
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

        this.emailVO = data.emailVO
    }
}