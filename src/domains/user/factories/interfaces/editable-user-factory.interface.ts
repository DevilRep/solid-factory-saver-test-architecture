import { IEditableUser } from "../../wrappers/interfaces/editable-user.interface"

export interface IEditableUserFactory {
    createUserForEdit(id: number): Promise<IEditableUser>
}