import { IReadableUserWithPhone } from "@domain/user";

export interface IEditableUserData {
    readonly name: string
    readonly phone?: string
}

export interface IEditableUser extends IReadableUserWithPhone {
    change(data: IEditableUserData): Promise<void>
}