import { AuthJwtTokens } from "../../value-object/auth-jwt-tokens"
import { IAuthenticatedUser } from "../../entities/interfaces/authenticated-user.interface"

export interface IAuthenticatedUserWithJwtTokens extends IAuthenticatedUser {
    generateNewAuthTokens(): Promise<AuthJwtTokens>
}   