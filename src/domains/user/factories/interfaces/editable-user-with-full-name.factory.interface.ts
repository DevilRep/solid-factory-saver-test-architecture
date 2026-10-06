import { IEditableUserWithFullName } from "../../wrappers/interfaces/editable-user-with-full-name.interface"

export interface IEditableUserWithFullNameFactory {
    createUserForEdit(id: number): Promise<IEditableUserWithFullName>
}