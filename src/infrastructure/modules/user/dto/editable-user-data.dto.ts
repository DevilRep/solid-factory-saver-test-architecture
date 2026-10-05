import { IEditableUserWithEmailData } from "@domain/user";

export class EditableUserDataDto implements IEditableUserWithEmailData {
    name!: string
    phone?: string
}