import { IReadableUserWithFullNameAndPhone } from "../entities/interfaces/user-with-full-name-and-phone.interface";
import { Email } from "../object-values/email";
import { FullName } from "../object-values/full-name";

export class ReadableUserWithFullNameAndEmail implements IReadableUserWithFullNameAndPhone {
    constructor(
        protected readonly user: IReadableUserWithFullNameAndPhone
    ) { }

    get id(): number {
        return this.user.id;
    }

    get emailVO(): Email {
        return this.user.emailVO;
    }

    get fullNameVO(): FullName {
        return this.user.fullNameVO;
    }

    get phone(): string {
        return this.user.phone;
    }
}