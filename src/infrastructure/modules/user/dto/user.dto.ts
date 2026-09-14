import { IUser } from "@domain/user";

export class UserDto {
    constructor(user: IUser) {
        this.email = user.email;
    }

    readonly email: string;
}