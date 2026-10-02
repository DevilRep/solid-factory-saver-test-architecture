import { IReadableUserWithPhone } from "../../entities/interfaces/user-with-phone.interface";

export interface IEditableUserData {
    readonly name: string
    readonly phone?: string
}

export interface IEditableUser extends IReadableUserWithPhone {
    change(data: IEditableUserData): Promise<void>
}