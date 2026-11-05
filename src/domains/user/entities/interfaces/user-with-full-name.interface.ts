import { Email } from "../../value-object/email"
import { FullName } from "../../value-object/full-name"

export interface IReadableUserWithFullName {
    readonly id: number
    readonly emailVO: Email
    readonly fullNameVO: FullName
}