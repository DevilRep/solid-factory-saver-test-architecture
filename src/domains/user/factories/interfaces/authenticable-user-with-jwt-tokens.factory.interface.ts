import { IAuthenticableUserWithJwtTokens } from "../../wrappers/interfaces/authenticable-user-with-jwt-tokens.interface"

export interface IAuthenticableUserWithJwtTokensFactory {
    createUserWithJwtTokensForSignIn(id: number): Promise<IAuthenticableUserWithJwtTokens>
}