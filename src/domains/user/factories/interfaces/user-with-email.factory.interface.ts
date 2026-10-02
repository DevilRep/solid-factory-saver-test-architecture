import { IReadableUserWithEmail } from "@domain/user";

export interface IUserWithEmailFactory {
    createUserWithEmail(id: number): Promise<IReadableUserWithEmail>;
}