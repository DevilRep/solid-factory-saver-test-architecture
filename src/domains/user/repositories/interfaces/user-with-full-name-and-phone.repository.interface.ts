export interface IUserWithFullNameAndPhoneRawRepositoryData {
    readonly id: number
    readonly email: string
    readonly firstName: string
    readonly lastName: string

    /**
     * @deprecated
     */
    readonly phone?: string
}

export interface IUserWithFullNameAndPhoneRepository {
    getUserWithFullNameAndPhoneById(id: number): Promise<IUserWithFullNameAndPhoneRawRepositoryData>
}