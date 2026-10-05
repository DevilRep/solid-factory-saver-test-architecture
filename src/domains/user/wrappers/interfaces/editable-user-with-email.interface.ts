import { IReadableUserWithEmailAndPhone } from "../../entities/interfaces/user-with-email-and-phone.interface";

export interface IEditableUserWithEmailData {
    readonly name: string
    readonly phone?: string
}

export interface IEditableUserWithEmail extends IReadableUserWithEmailAndPhone {
    change(data: IEditableUserWithEmailData): Promise<void>
}