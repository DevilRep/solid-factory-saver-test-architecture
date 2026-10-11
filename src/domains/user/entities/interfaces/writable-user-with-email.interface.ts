import { IReadableUserWithEmailAndPhone } from "./user-with-email-and-phone.interface";

/**
 * @deprecated
 */
export interface IWritableUserWithEmail extends IReadableUserWithEmailAndPhone {
    name: string
    phone: string
}