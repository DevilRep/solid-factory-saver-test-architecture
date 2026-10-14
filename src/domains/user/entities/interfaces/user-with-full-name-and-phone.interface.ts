import { IReadableUserWithFullName } from "./user-with-full-name.interface"

/**
 * @deprecated
 */
export interface IReadableUserWithFullNameAndPhone extends IReadableUserWithFullName {
    readonly phone: string
}