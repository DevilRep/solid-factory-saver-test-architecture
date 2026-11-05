import { AuthJwtTokens } from "../../value-object/auth-jwt-tokens"
import { IAuthenticatedUser } from "../../entities/interfaces/authenticated-user.interface"

export interface IAuthenticableUserWithJwtTokens extends IAuthenticatedUser {
    signIn(password: string): Promise<AuthJwtTokens>
}