export interface IPotentialSameUserRawData {
    readonly id: number
    readonly email: number
}

export interface IPotentialSameUserRepository {
    getUserByEmail(email: string): Promise<IPotentialSameUserRawData>
}