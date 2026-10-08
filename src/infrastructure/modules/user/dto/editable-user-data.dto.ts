import { IEditableUserWithEmailData } from "@domain/user";

/**
 * @deprecated
 */
export class EditableUserDataDto implements IEditableUserWithEmailData {
    name!: string
    phone?: string
}