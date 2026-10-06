import { Email } from "../../object-values/email"

/**
 * @deprecated Use IReadableUserWithFullName instead
 */
export interface IReadableUserWithEmail {
    readonly id: number
    /**
     * @deprecated Use fullNameVO instead
     */
    readonly name: string
    readonly emailVO: Email
}