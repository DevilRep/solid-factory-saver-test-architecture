import { IUserRepository, IUserRepositoryData, IUserWithPhoneRepository, IUserWithPhoneRepositoryData } from "@domain/user";

export class UserMemoryRepository implements IUserRepository, IUserWithPhoneRepository {
    private users: (IUserRepositoryData | IUserWithPhoneRepositoryData)[] = [];

    constructor() {
        this.users = [{
            id: 1,
            email: "user1@example.com",
        }, {
            id: 2,
            email: "user2@example.com",
            phone: "098-765-4321"
        }]
    }

    getById(id: number): Promise<IUserRepositoryData> {
        const userData = this.users.find(user => user.id === id);
        if (!userData) {
            throw new Error(`User with id ${id} not found`);
        }
        return Promise.resolve(userData);
    }

    getWithPhoneById(id: number): Promise<IUserWithPhoneRepositoryData> {
        const userData = this.users.find(user => user.id === id);
        if (!userData) {
            throw new Error(`User with id ${id} not found`);
        }
        return Promise.resolve({
            ...userData,
            phone: (userData as IUserWithPhoneRepositoryData).phone || ""
        });
    }
}