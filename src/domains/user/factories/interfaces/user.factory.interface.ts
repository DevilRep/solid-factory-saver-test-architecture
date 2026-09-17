import { IReadonlyUser } from "@domain/user/entities/interfaces/user.interface";

export interface IUserFactory {
    create(id: number): Promise<IReadonlyUser>;
}