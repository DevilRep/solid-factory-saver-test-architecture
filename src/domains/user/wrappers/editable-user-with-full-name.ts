import { IWritableUserWithFullName } from "../entities/interfaces/writable-user-with-full-name.interface"
import { FullName } from "../object-values/full-name"
import { IUserWithFullNameSaver } from "../savers/interfaces/user-with-full-name.saver.interface"
import { IEditableUserWithFullName, IEditableUserWithFullNameData } from "./interfaces/editable-user-with-full-name.interface"
import { ReadableUserWithFullNameAndEmail } from "./readable-user-with-full-name-and-email"

export class EditableUserWithFullName extends ReadableUserWithFullNameAndEmail implements IEditableUserWithFullName {
    constructor(
        protected readonly user: IWritableUserWithFullName,
        protected readonly saver: IUserWithFullNameSaver
    ) {
        super(user)
    }

    async change({
        firstName, lastName, phone
    }: IEditableUserWithFullNameData): Promise<void> {
        this.user.phone = phone || ''
        this.user.fullNameVO = new FullName(firstName, lastName)

        await this.saver.saveUserWithFullName({
            id: this.id,
            firstName: this.fullNameVO.firstName,
            lastName: this.fullNameVO.lastName,
            phone: this.phone
        })
    }
}