export interface IAuthenticableUserSaver {
    saveAuthenticationInfo(userId: number): Promise<void>
}