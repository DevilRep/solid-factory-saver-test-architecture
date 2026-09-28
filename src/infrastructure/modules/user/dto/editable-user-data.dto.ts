import { IEditableUserData } from "@domain/user";

export class EditableUserDataDto implements IEditableUserData {
    readonly name: string

    constructor(name: string) {
        this.name = name;
    }
}