import { User } from "../entities/user.entity";
import { IUserWithPhoneRepository } from "../repositories/interfaces/user-with-phone.repository.interface";
import { IUserSaver } from "../savers/interfaces/user.saver.interface";
import { EditableUser } from "../wrappers/editable-user";
import { IEditableUserFactory } from "./interfaces/editable-user.factory.interface";

export class EditableUserFactory implements IEditableUserFactory {
    constructor(
        private readonly userRepository: IUserWithPhoneRepository,
        private readonly userSaver: IUserSaver
    ) { }

    async createUserForEdit(id: number) {
        const userData = await this.userRepository.getWithPhoneById(id)

        return new EditableUser(
            new User(userData),
            this.userSaver
        )
    }
}