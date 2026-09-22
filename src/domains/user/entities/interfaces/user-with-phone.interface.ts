import { IReadableUser } from "./user.interface";

export interface IUserWithPhone extends IReadableUser {
    readonly phone: string;
}