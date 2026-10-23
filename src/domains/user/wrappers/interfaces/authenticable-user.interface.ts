import { IAuthenticatedUser } from "../../entities/interfaces/authenticated-user.interface"

export interface IAuthenticableUser extends IAuthenticatedUser {
    signIn(password: string): Promise<void>
}