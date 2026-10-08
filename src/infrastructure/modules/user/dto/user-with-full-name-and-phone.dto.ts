import { IEditableUserWithFullName } from "@domain/user"

export class UserWithFullNameAndPhoneDto {
    readonly email: string
    readonly firstName?: string
    readonly lastName?: string

    /**
     * @deprecated Use firstName and lastName instead
     */
    readonly name?: string

    readonly phone?: string

    constructor({ phone, emailVO, fullNameVO }: IEditableUserWithFullName) {
        this.email = emailVO.value
        this.firstName = fullNameVO.firstName
        this.lastName = fullNameVO.lastName
        this.name = this.firstName && this.lastName ? `${this.firstName} ${this.lastName}` : this.firstName || this.lastName || ''

        if (phone) {
            this.phone = phone
        }
    }
}