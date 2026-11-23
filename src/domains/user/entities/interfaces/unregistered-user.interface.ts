import { Email } from "../../value-object/email"
import { FullName } from "../../value-object/full-name"
import { IReadableUserWithFullName } from "./user-with-full-name.interface"

export interface IUnregisteredUser {
    readonly email: Email

    readonly fullName: FullName

    signUp(password: string): Promise<IReadableUserWithFullName>
}