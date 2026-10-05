import { Email } from "../object-values/email";
import { IUserWithPhoneRepository } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IUserSaver } from "../savers/interfaces/user.saver.interface";
import { EditableUserWithEmail } from "../wrappers/editable-user-with-email";
import { IEditableUserWithEmail } from "../wrappers/interfaces/editable-user-with-email.interface";
import { IEditableUserWithEmailFactory } from "./interfaces/editable-user-with-email.factory.interface";

export class EditableUserWithEmailFactory implements IEditableUserWithEmailFactory {
    constructor(
        private readonly repository: IUserWithPhoneRepository,
        private readonly saver: IUserSaver
    ) { }

    async createUserForEdit(id: number): Promise<IEditableUserWithEmail> {
        const { email, phone, name } = await this.repository.getWithPhoneById(id)

        return new EditableUserWithEmail(
            {
                id,
                name: name || '',
                phone,
                emailVO: new Email(email)
            },
            this.saver
        )
    }
}