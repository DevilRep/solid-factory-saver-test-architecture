import { IUnregisteredUser } from "../../entities/interfaces/unregistered-user.interface"

export interface IUnregisteredUserRawData {
    readonly email: string
    readonly firstName: string
    readonly lastName: string
}

export interface IUnregisteredUserFactory {
    createUnregisteredUser(data: IUnregisteredUserRawData): IUnregisteredUser
}