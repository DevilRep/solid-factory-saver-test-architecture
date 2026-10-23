import { IAuthenticatedUser } from "./interfaces/authenticated-user.interface";

export class AuthenticatedUser implements IAuthenticatedUser {
    constructor(public readonly id: number) { }
}