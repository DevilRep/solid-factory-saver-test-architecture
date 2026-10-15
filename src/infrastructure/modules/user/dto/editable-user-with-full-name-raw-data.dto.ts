import { IEditableUserData } from "@domain/user"

export class EditableUserWithFullNameRawData implements IEditableUserData {
    firstName!: string
    lastName!: string
}