import { IReadableUser } from "@domain/user";

export class UserInfoDto {
    constructor(user: IReadableUser) {
        this.email = user.email;
    }

    readonly email: string;
}