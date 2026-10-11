import { IReadableUserWithFullNameAndPhone } from "../../entities/interfaces/user-with-full-name-and-phone.interface"

export interface IUserWithFullNameAndPhoneFactory {
    createUserWithFullNameAndPhone(id: number): Promise<IReadableUserWithFullNameAndPhone>
}