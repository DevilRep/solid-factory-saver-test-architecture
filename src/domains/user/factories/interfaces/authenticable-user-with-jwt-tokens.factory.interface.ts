import { IAuthenticableUserWithJwtTokens } from "../../wrappers/interfaces/authenticable-user-with-jwt-tokens.interface"

export interface IAuthenticableUserWithJwtTokensFactory {
    createUserWithJwtTokensForSignIn(email: string): Promise<IAuthenticableUserWithJwtTokens>
}