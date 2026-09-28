import { IEditableUser } from "@domain/user/wrappers/interfaces/editable-user.interface";

export interface IEditableUserFactory {
    createUserForEdit(id: number): Promise<IEditableUser>
}