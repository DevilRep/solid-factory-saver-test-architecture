import { IReadableUserWithFullName } from "@domain/user"

export class SignedUpUserDto {
    readonly email: string
    readonly firstName: string
    readonly lastName?: string
    readonly name: string

    constructor(user: IReadableUserWithFullName) {
        this.email = user.emailVO.value
        this.firstName = user.fullNameVO.firstName

        if (user.fullNameVO.lastName) {
            this.lastName = user.fullNameVO.lastName
        }

        this.name = user.fullNameVO.getFullName()
    }
}