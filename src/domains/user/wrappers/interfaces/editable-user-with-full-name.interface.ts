import { IReadableUserWithFullNameAndPhone } from "../../entities/interfaces/user-with-full-name-and-phone.interface"

export interface IEditableUserWithFullNameData {
    readonly firstName: string
    readonly lastName: string
    readonly phone?: string
}

export interface IEditableUserWithFullName extends IReadableUserWithFullNameAndPhone {
    change(data: IEditableUserWithFullNameData): Promise<void>
}