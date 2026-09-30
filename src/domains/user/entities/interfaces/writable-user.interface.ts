import { IReadableUserWithPhone } from "./user-with-phone.interface";

export interface IWritableUser extends IReadableUserWithPhone {
    name: string
    phone: string;
}