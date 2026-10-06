import { IEditableUserWithEmail } from "../../wrappers/interfaces/editable-user-with-email.interface";

/**
 * @deprecated
 */
export interface IEditableUserWithEmailFactory {
    createUserForEdit(id: number): Promise<IEditableUserWithEmail>
}