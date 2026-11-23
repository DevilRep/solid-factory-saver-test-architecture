import { Email } from "../../value-object/email"

export interface IPotentialSameUser {
    readonly id: number
    readonly email: Email
}