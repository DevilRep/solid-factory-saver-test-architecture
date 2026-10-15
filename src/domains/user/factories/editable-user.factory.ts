import { User } from "../entities/user.entity";
import { Email } from "../object-values/email";
import { FullName } from "../object-values/full-name";
import { IUserWithFullNameRepository } from "../repositories/interfaces/user-with-full-name.repository.interface";
import { IUserSaver } from "../savers/interfaces/user-saver.interface";
import { EditableUser } from "../wrappers/editable-user";
import { IEditableUser } from "../wrappers/interfaces/editable-user.interface";
import { IEditableUserFactory } from "./interfaces/editable-user-factory.interface";

export class EditableUserFactory implements IEditableUserFactory {
    constructor(
        private readonly repository: IUserWithFullNameRepository,
        private readonly saver: IUserSaver
    ) { }

    async createUserForEdit(id: number): Promise<IEditableUser> {
        const { firstName, lastName, email } = await this.repository.getUserWithFullNameById(id)

        return new EditableUser(
            new User({
                id,
                emailVO: new Email(email),
                fullNameVO: new FullName(firstName, lastName)
            }),
            this.saver
        )
    }
}