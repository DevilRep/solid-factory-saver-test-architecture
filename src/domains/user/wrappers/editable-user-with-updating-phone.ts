import { IEditableUser, IEditableUserData } from "./interfaces/editable-user.interface";

import { EditableUser } from "./editable-user";

export class EditableUserWithUpdatingPhone extends EditableUser implements IEditableUser {
    async change({ name, phone }: IEditableUserData): Promise<void> {
        this.user.phone = phone || ''

        await super.change({
            name
        })
    }
}