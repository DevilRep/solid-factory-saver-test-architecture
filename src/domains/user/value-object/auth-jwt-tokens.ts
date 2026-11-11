import { ExpiresIn, IAuthJwtTokenData, JwtToken } from "./jwt-token"

export class AuthJwtTokens {
    public constructor(
        public readonly accessToken: JwtToken,
        public readonly refreshToken: JwtToken
    ) { }

    static async fromRawData(data: IAuthJwtTokenData): Promise<AuthJwtTokens> {
        return new AuthJwtTokens(
            await JwtToken.fromRawData(
                data,
                ExpiresIn.HOUR
            ),
            await JwtToken.fromRawData(
                data,
                ExpiresIn.WEEK
            )
        )
    }
}