import { IReadableUserWithEmailAndPhone } from "../../entities/interfaces/user-with-email-and-phone.interface";

export interface IUserWithEmailAndPhoneFactory {
    createUserWithEmailAndPhone(id: number): Promise<IReadableUserWithEmailAndPhone>;
}