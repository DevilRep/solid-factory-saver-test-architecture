import { IReadableUserWithFullName } from "../../entities/interfaces/user-with-full-name.interface";

export interface IUserWithFullNameFactory {
    createUserWithFullName(id: number): Promise<IReadableUserWithFullName>;
}