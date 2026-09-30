import { IEditableUser, IEditableUserData } from "./interfaces/editable-user.interface";

import { EditableUser } from "./editable-user";

export class EditableUserWithUpdatingPhone extends EditableUser implements IEditableUser {
    async change({ name, phone }: IEditableUserData): Promise<void> {
        this.user.name = name
        this.user.phone = phone || ''

        await this.saver.updateUserData({
            id: this.user.id,
            name: this.user.name,
            phone: this.user.phone
        })
    }
}