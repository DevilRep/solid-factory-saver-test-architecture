import { IReadableUserWithFullName } from "./user-with-full-name.interface"

export interface IReadableUserWithFullNameAndPhone extends IReadableUserWithFullName {
    readonly phone: string
}