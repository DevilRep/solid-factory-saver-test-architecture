import { IReadableUser } from "@domain/user";

export class UserInfoDto {
    readonly email: string;
    readonly name: string;

    constructor(user: IReadableUser) {
        this.email = user.email;
        this.name = user.name;
    }
}