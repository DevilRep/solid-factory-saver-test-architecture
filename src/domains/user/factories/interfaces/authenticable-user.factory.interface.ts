import { IAuthenticableUser } from "../../wrappers/interfaces/authenticable-user.interface"

export interface IAuthenticableUserFactory {
    createUserForSignIn(id: number): Promise<IAuthenticableUser>
}