import { IReadableUserWithPhone } from "../entities/interfaces/user-with-phone.interface";

export class ReadableUserWithPhoneData implements IReadableUserWithPhone {
    constructor(
        protected readonly user: IReadableUserWithPhone
    ) { }

    public get id() {
        return this.user.id
    }

    public get name() {
        return this.user.name
    }

    public get phone() {
        return this.user.phone
    }

    public get email() {
        return this.user.email
    }
}