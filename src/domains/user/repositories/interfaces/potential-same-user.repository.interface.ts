export interface IPotentialSameUserRawData {
    readonly id: number
    readonly email: string
}

export interface IPotentialSameUserRepository {
    getUserByEmail(email: string): Promise<IPotentialSameUserRawData>
}