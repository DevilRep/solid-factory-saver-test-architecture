import { IReadableUserWithEmail } from "@domain/user";

/**
 * @deprecated
 */
export class UserWithEmailDto {
    readonly email: string;
    readonly name: string;

    constructor(user: IReadableUserWithEmail) {
        this.email = user.emailVO.value;
        this.name = user.name;
    }
}