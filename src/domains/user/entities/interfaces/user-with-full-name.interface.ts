import { Email } from "../../object-values/email"
import { FullName } from "../../object-values/full-name"

export interface IReadableUserWithFullName {
    readonly id: number
    readonly emailVO: Email
    readonly fullNameVO: FullName
}