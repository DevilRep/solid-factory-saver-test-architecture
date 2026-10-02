import { Email } from "../../object-values/email"

export interface IReadableUserWithEmail {
    readonly id: number
    readonly name: string
    readonly emailVO: Email
}