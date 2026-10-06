import { IReadableUserWithEmail } from "./interfaces/user-with-email.interface"
import { IReadableUserWithFullName } from "./interfaces/user-with-full-name.interface"
import { Email } from "../object-values/email"
import { FullName } from "../object-values/full-name"

interface IUserData {
    readonly id: number
    readonly phone?: string
    readonly name?: string

    readonly emailVO: Email
    readonly fullNameVO?: FullName
}

export class User implements IReadableUserWithEmail, IReadableUserWithFullName {
    public readonly id: number

    public phone: string

    public emailVO: Email

    public fullNameVO: FullName

    constructor(data: IUserData) {
        this.id = data.id

        this.phone = data.phone || ''

        this.emailVO = data.emailVO

        if (data.fullNameVO) {
            this.fullNameVO = data.fullNameVO
        } else if (data.name) {
            const [firstName, lastName] = data.name.split(' ')
            this.fullNameVO = new FullName(firstName, lastName)
        } else {
            this.fullNameVO = new FullName('', '')
        }
    }

    public get name(): string {
        return this.fullNameVO.getFullName()
    }
}