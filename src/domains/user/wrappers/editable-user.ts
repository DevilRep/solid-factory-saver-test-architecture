import { IWritableUser } from "../entities/interfaces/writable-user.interface";
import { IUserSaver } from "../savers/interfaces/user.saver.interface";
import { IEditableUser, IEditableUserData } from "./interfaces/editable-user.interface";

export class EditableUser implements IEditableUser {
    constructor(
        protected readonly user: IWritableUser,
        protected readonly saver: IUserSaver
    ) { }

    public get id(): number {
        return this.user.id
    }

    public get email(): string {
        return this.user.email
    }

    public get name(): string {
        return this.user.name
    }

    public get phone(): string {
        return this.user.phone
    }

    async change(data: IEditableUserData): Promise<void> {
        this.user.name = data.name

        await this.saver.updateUserData({
            name: this.user.name
        })
    }
}