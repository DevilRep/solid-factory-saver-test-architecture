import { IAuthenticableUser } from "../../wrappers/interfaces/authenticable-user.interface"

export interface IAuthenticableUserFactory {
    createUserForSignIn(email: string): Promise<IAuthenticableUser>
}