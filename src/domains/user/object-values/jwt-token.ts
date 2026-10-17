import { JwtPayload, verify, sign } from "jsonwebtoken"

export interface IAuthJwtTokenData {
    readonly userId: string
}

export enum ExpiresIn {
    HOUR = '1h',
    DAY = '1d',
    WEEK = '7d'
}

export class JwtToken {
    protected constructor(
        public readonly encrypted: string,
        public readonly data: IAuthJwtTokenData
    ) {

    }

    public static async fromEncryptedToken(jwtToken: string): Promise<JwtToken> {
        const decodedData: JwtPayload | string = await (new Promise((resolve, reject) =>
            verify(
                jwtToken,
                process.env.JWT_SECRET!,
                (error, decoded) => {
                    if (error || !decoded) {
                        return reject(error)
                    }
                    resolve(decoded)
                }
            ))
        )

        if (typeof decodedData === "string" || !decodedData.sub) {
            throw new Error('The token is invalid')
        }

        return new JwtToken(jwtToken, {
            userId: decodedData.sub
        })
    }

    public static async fromRawData(
        rawData: IAuthJwtTokenData,
        expiresIn: ExpiresIn = ExpiresIn.HOUR
    ): Promise<JwtToken> {
        const jwtToken: string = await (new Promise((resolve, reject) =>
            sign(
                rawData,
                process.env.JWT_SECRET!,
                {
                    algorithm: 'HS256',
                    expiresIn
                },
                (error, encoded) => {
                    if (error || !encoded) {
                        return reject(error)
                    }
                    resolve(encoded)
                }
            )
        ))

        return new JwtToken(jwtToken, rawData)
    }
}
