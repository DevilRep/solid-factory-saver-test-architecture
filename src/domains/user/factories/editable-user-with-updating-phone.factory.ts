import { User } from "../entities/user.entity";
import { IUserWithPhoneRepository } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IUserSaver } from "../savers/interfaces/user.saver.interface";
import { EditableUserWithUpdatingPhone } from "../wrappers/editable-user-with-updating-phone";
import { IEditableUser } from "../wrappers/interfaces/editable-user.interface";
import { IEditableUserFactory } from "./interfaces/editable-user.factory.interface";

export class EditableUserWithUpdatingPhoneFactory implements IEditableUserFactory {
    constructor(
        private readonly repository: IUserWithPhoneRepository,
        private readonly saver: IUserSaver
    ) { }

    async createUserForEdit(id: number): Promise<IEditableUser> {
        const userData = await this.repository.getWithPhoneById(id)

        return new EditableUserWithUpdatingPhone(
            new User(userData),
            this.saver
        )
    }
}