import { IAuthenticatedUser } from "@domain/user"

export class AuthenticatedUserDto {
    readonly id!: number

    constructor(user: IAuthenticatedUser) {
        this.id = user.id
    }
}