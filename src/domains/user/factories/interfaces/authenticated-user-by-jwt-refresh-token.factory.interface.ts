import { IAuthenticatedUserWithJwtTokens } from "../../wrappers/interfaces/authenticated-user-with-jwt-tokens.interface"

export interface IAuthenticatedUserByJwtRefreshTokenFactory {
    createAuthenticatedUserByJwtRefreshToken(jwtRefreshToken: string): Promise<IAuthenticatedUserWithJwtTokens>
}