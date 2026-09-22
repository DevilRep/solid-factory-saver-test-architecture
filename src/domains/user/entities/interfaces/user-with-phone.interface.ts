import { IReadableUser } from "./user.interface";

export interface IReadableUserWithPhone extends IReadableUser {
    readonly phone: string;
}