import { IReadableUserWithFullName } from "@domain/user"

export class UserWithFullNameDto {
    readonly email: string
    readonly firstName?: string
    readonly lastName?: string

    /**
     * @deprecated Use firstName and lastName instead
     */
    readonly name: string

    constructor(
        {
            emailVO,
            fullNameVO
        }: IReadableUserWithFullName
    ) {
        this.email = emailVO.value

        if (fullNameVO.firstName) {
            this.firstName = fullNameVO.firstName
        }
        if (fullNameVO.lastName) {
            this.lastName = fullNameVO.lastName
        }
        this.name = fullNameVO.getFullName()
    }
}