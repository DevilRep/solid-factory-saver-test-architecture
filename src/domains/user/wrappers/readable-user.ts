import { IReadableUserWithFullName } from "../entities/interfaces/user-with-full-name.interface";
import { Email } from "../value-object/email";
import { FullName } from "../value-object/full-name";

export class ReadableUser implements IReadableUserWithFullName {
    constructor(
        protected readonly user: IReadableUserWithFullName
    ) { }

    get id(): number {
        return this.user.id
    }

    get emailVO(): Email {
        return this.user.emailVO
    }

    get fullNameVO(): FullName {
        return this.user.fullNameVO
    }
}