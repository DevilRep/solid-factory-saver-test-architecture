import { IReadableUserWithEmail } from "@domain/user";

/**
 * @deprecated
 */
export interface IUserWithEmailFactory {
    createUserWithEmail(id: number): Promise<IReadableUserWithEmail>;
}