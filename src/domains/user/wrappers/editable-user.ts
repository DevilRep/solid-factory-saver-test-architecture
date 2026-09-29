import { IWritableUser } from "../entities/interfaces/writable-user.interface";
import { IUserSaver } from "../savers/interfaces/user.saver.interface";
import { IEditableUser, IEditableUserData } from "./interfaces/editable-user.interface";
import { ReadableUserWithPhoneData } from "./readable-user-with-phone-data";

export class EditableUser extends ReadableUserWithPhoneData implements IEditableUser {
    constructor(
        protected readonly user: IWritableUser,
        protected readonly saver: IUserSaver
    ) {
        super(user)
    }

    async change(data: IEditableUserData): Promise<void> {
        this.user.name = data.name

        await this.saver.updateUserData({
            id: this.user.id,
            name: this.user.name
        })
    }
}