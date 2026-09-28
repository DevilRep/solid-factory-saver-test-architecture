import { IReadableUser } from "./user.interface"

export interface IWritableUser extends IReadableUser {
    name: string
}