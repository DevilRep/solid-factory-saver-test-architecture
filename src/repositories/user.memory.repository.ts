import { IUserRepository, IUserRepositoryData } from "@domain/user";

export class UserMemoryRepository implements IUserRepository {
    private users: IUserRepositoryData[] = [];

    constructor() {
        this.users = [{
            id: 1,
            email: "user1@example.com"
        }]
    }

    getById(id: number): Promise<IUserRepositoryData> {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return Promise.resolve(user);
    }
}