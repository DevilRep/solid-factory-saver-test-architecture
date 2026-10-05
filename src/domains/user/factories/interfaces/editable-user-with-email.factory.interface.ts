import { IEditableUserWithEmail } from "../../wrappers/interfaces/editable-user-with-email.interface";

export interface IEditableUserWithEmailFactory {
    createUserForEdit(id: number): Promise<IEditableUserWithEmail>
}