import { IEditableUserData } from "@domain/user";

export class EditableUserDataDto implements IEditableUserData {
    name!: string
    phone?: string
}