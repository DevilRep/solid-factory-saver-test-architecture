import { IUserWithFullNameRepository, IUserWithFullNameRepositoryData } from "@domain/user";
import { UserV2MemoryRepository } from "./user-v2.memory.repository";

export class UserV3MemoryRepository extends UserV2MemoryRepository implements IUserWithFullNameRepository {
    constructor() {
        super()
        this.users = [{
            id: 1,
            email: "user1@example.com",
            name: "User One",
            firstName: "User",
            lastName: "One"
        }, {
            id: 2,
            email: "user2@example.com",
            phone: "098-765-4321",
            name: "User Two",
            firstName: "User",
            lastName: "Two"
        }]
    }

    async getUserWithFullNameById(id: number): Promise<IUserWithFullNameRepositoryData> {
        const userData = this.users.find(user => user.id === id);
        if (!userData) {
            throw new Error(`User with id ${id} not found`);
        }
        return Promise.resolve({
            id: userData.id,
            email: userData.email,
            firstName: userData.firstName || "",
            lastName: userData.lastName || ""
        });
    }
}