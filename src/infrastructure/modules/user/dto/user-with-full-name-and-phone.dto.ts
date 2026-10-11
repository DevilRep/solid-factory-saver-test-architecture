import { IReadableUserWithFullNameAndPhone } from "@domain/user"

export class UserWithFullNameAndPhoneDto {
    readonly email: string
    readonly firstName?: string
    readonly lastName?: string

    /**
     * @deprecated Use firstName and lastName instead
     */
    readonly name: string

    readonly phone?: string

    constructor({ phone, emailVO, fullNameVO }: IReadableUserWithFullNameAndPhone) {
        this.email = emailVO.value

        if (fullNameVO.firstName) {
            this.firstName = fullNameVO.firstName
        }
        if (fullNameVO.lastName) {
            this.lastName = fullNameVO.lastName
        }
        this.name = fullNameVO.getFullName()

        if (phone) {
            this.phone = phone
        }
    }
}