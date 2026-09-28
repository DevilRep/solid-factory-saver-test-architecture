import { IUserRepository, IUserRepositoryData, IUserSaver, IUserSaverRawData, IUserWithPhoneRepository, IUserWithPhoneRepositoryData } from "@domain/user";

interface IUserMemoryRepositoryData {
    readonly id: number;
    readonly email: string;
    readonly phone?: string;
    name?: string;
}

export class UserMemoryRepository implements IUserRepository, IUserWithPhoneRepository, IUserSaver {
    protected users: IUserMemoryRepositoryData[] = []

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

    async updateUserData({ id, name }: IUserSaverRawData): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        this.users[userIndex].name = name;
    }
}