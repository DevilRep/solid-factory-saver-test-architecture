import { IReadableUserWithEmailAndPhone } from "./user-with-email-and-phone.interface";

export interface IWritableUserWithEmail extends IReadableUserWithEmailAndPhone {
    name: string
    phone: string
}