import { IWritableUser } from "../entities/interfaces/writable-user.interface"
import { FullName } from "../object-values/full-name"
import { IUserSaver } from "../savers/interfaces/user-saver.interface"
import { IEditableUser, IEditableUserData } from "./interfaces/editable-user.interface"
import { ReadableUser } from "./readable-user"

export class EditableUser extends ReadableUser implements IEditableUser {
    constructor(
        protected readonly user: IWritableUser,
        protected readonly saver: IUserSaver
    ) {
        super(user)
    }

    async change({ firstName, lastName }: IEditableUserData): Promise<void> {
        this.user.fullNameVO = new FullName(firstName, lastName)

        await this.saver.saveUserData({
            id: this.id,
            firstName: this.fullNameVO.firstName,
            lastName: this.fullNameVO.lastName || ''
        })
    }
}