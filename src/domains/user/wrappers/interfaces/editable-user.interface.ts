import { IReadableUserWithFullName } from "@domain/user/entities/interfaces/user-with-full-name.interface"

export interface IEditableUserData {
    readonly firstName: string
    readonly lastName: string
}

export interface IEditableUser extends IReadableUserWithFullName {
    change(data: IEditableUserData): Promise<void>
}