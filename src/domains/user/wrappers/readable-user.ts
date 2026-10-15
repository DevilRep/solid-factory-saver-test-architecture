import { IReadableUserWithFullName } from "../entities/interfaces/user-with-full-name.interface";
import { Email } from "../object-values/email";
import { FullName } from "../object-values/full-name";

export class ReadableUser implements IReadableUserWithFullName {
    constructor(
        protected readonly user: IReadableUserWithFullName
    ) { }

    get id(): number {
        return this.user.id
    }

    get emailVO(): Email {
        return this.emailVO
    }

    get fullNameVO(): FullName {
        return this.fullNameVO
    }
}