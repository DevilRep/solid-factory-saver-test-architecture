import { IReadableUserWithEmailAndPhone } from "../../entities/interfaces/user-with-email-and-phone.interface";

/**
 * @deprecated
 */
export interface IEditableUserWithEmailData {
    readonly name: string
    readonly phone?: string
}

/**
 * @deprecated
 */
export interface IEditableUserWithEmail extends IReadableUserWithEmailAndPhone {
    change(data: IEditableUserWithEmailData): Promise<void>
}