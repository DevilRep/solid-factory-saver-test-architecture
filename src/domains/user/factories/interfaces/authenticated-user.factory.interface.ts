import { IAuthenticatedUser } from "@domain/user/entities/interfaces/authenticated-user.interface";

export interface IAuthenticatedUserFactory {
    createAuthenticatedUser(id: number): IAuthenticatedUser
}