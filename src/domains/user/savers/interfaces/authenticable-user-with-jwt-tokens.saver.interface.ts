export interface IAuthenticableUserWithJwtTokensRawData {
    accessToken: string
    refreshToken: string
}

export interface IAuthenticableUserWithJwtTokensSaver {
    generateJwtTokens(userId: number): Promise<IAuthenticableUserWithJwtTokensRawData>
}