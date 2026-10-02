export interface IReadableUser {
    readonly id: number
    /**
     * @deprecated use emailVO instead
     */
    readonly email: string
    readonly name: string
}