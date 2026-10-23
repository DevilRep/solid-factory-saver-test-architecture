export interface IAuthenticatedUserRepository {
    isExist(id: number): Promise<boolean>
}