import { IUser } from "./interfaces/user.interface";

export class User implements IUser {
    constructor(
        public readonly id: number,
        public readonly email: string
    ) { }
}