import { IReadableUserWithFullName } from "./interfaces/user-with-full-name.interface"
import { Email } from "../value-object/email"
import { FullName } from "../value-object/full-name"

interface IUserData {
    readonly id: number

    readonly name?: string

    readonly emailVO: Email
    readonly fullNameVO?: FullName
}

export class User implements IReadableUserWithFullName {
    public readonly id: number

    public emailVO: Email

    public fullNameVO: FullName

    constructor(data: IUserData) {
        this.id = data.id

        this.emailVO = data.emailVO

        if (data.fullNameVO) {
            this.fullNameVO = data.fullNameVO
        } else if (data.name) {
            const [firstName, lastName] = data.name.split(' ')
            this.fullNameVO = new FullName(firstName, lastName)
        } else {
            this.fullNameVO = new FullName(data.emailVO.value)
        }
    }
}