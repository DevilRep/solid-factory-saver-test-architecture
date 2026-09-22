import { IUserWithPhone } from "@domain/user/entities/interfaces/user-with-phone.interface";

export interface IUserWithPhoneFactory {
    createWithPhone(id: number): Promise<IUserWithPhone>;
}