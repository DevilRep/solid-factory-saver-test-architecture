import { IAuthenticableUserWithJwtTokens } from "../../wrappers/interfaces/authenticable-user-with-jwt-token.interface"

export interface IAuthenticableUserWithJwtTokensFactory {
    createUserWithJwtTokensForSignIn(id: number): Promise<IAuthenticableUserWithJwtTokens>
}