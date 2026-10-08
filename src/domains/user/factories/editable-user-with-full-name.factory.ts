import { User } from "../entities/user.entity";
import { Email } from "../object-values/email";
import { FullName } from "../object-values/full-name";
import { IUserWithFullNameAndPhoneRepository } from "../repositories/interfaces/user-with-full-name-and-phone.repository.interface";
import { IUserWithFullNameSaver } from "../savers/interfaces/user-with-full-name.saver.interface";
import { EditableUserWithFullName } from "../wrappers/editable-user-with-full-name";
import { IEditableUserWithFullName } from "../wrappers/interfaces/editable-user-with-full-name.interface";
import { IEditableUserWithFullNameFactory } from "./interfaces/editable-user-with-full-name.factory.interface";

export class EditableUserWithFullNameFactory implements IEditableUserWithFullNameFactory {
    constructor(
        private readonly repository: IUserWithFullNameAndPhoneRepository,
        private readonly saver: IUserWithFullNameSaver
    ) { }

    async createUserForEdit(id: number): Promise<IEditableUserWithFullName> {
        const { firstName, lastName, email, phone } = await this.repository.getUserWithFullNameAndPhoneById(id)

        return new EditableUserWithFullName(
            new User({
                id,
                emailVO: new Email(email),
                fullNameVO: new FullName(firstName, lastName),
                phone
            }),
            this.saver
        )
    }
}