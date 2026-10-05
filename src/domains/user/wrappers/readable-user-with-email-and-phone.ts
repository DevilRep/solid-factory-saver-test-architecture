import { IReadableUserWithEmailAndPhone } from "../entities/interfaces/user-with-email-and-phone.interface";
import { Email } from "../object-values/email";

export class ReadableUserWithEmailAndPhone implements IReadableUserWithEmailAndPhone {
    constructor(
        protected readonly user: IReadableUserWithEmailAndPhone
    ) { }

    get id(): number {
        return this.user.id
    }

    get name(): string {
        return this.user.name
    }

    get phone(): string {
        return this.user.phone
    }

    get emailVO(): Email {
        return this.user.emailVO
    }
}
