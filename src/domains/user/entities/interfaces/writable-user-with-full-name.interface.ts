import { FullName } from "../../object-values/full-name"
import { IReadableUserWithFullNameAndPhone } from "./user-with-full-name-and-phone.interface"

export interface IWritableUserWithFullName extends IReadableUserWithFullNameAndPhone {
    fullNameVO: FullName
    phone: string
}