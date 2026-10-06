import { IReadableUserWithEmail } from "./user-with-email.interface";

/**
 * @deprecated
 */
export interface IReadableUserWithEmailAndPhone extends IReadableUserWithEmail {
    readonly phone: string;
}