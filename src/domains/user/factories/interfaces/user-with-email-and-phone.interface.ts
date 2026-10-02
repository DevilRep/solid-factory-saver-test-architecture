import { IReadableUserWithEmailAndPhone } from "../../entities/interfaces/user-with-email-and-phone.interface";

export interface IReadableUserWithEmailAndPhoneFactory {
    createUserWithEmailAndPhone(id: number): Promise<IReadableUserWithEmailAndPhone>;
}