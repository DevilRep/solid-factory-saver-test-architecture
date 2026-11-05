import { IAuthenticatedUser } from "../../entities/interfaces/authenticated-user.interface"

export interface IAuthenticatedUserByJwtAccessTokenFactory {
    createAuthenticatedUserByJwtAccessToken(jwtAccessToken: string): Promise<IAuthenticatedUser>
}