import { IWritableUserWithEmail } from "../entities/interfaces/writable-user-with-email.interface"
import { IUserSaver } from "../savers/interfaces/user.saver.interface"
import { IEditableUserWithEmail, IEditableUserWithEmailData } from "./interfaces/editable-user-with-email.interface"
import { ReadableUserWithEmailAndPhone } from "./readable-user-with-email-and-phone"

export class EditableUserWithEmail extends ReadableUserWithEmailAndPhone implements IEditableUserWithEmail {
    constructor(
        protected readonly user: IWritableUserWithEmail,
        protected readonly saver: IUserSaver
    ) {
        super(user)
    }

    async change({ name, phone }: IEditableUserWithEmailData): Promise<void> {
        this.user.name = name
        this.user.phone = phone || ''

        await this.saver.updateUserData({
            id: this.user.id,
            name: this.user.name,
            phone: this.user.phone
        })
    }
}