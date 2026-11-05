import { JwtToken } from "./jwt-token"

export class AuthJwtTokens {
    constructor(
        public readonly accessToken: JwtToken,
        public readonly refreshToken: JwtToken
    ) { }
}