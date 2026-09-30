import { IUserRepository, IUserSaver, IUserSaverRawData, IUserWithPhoneRepository } from "@domain/user";

import { UserMemoryRepository } from "./user.memory.repository";

export class UserV2MemoryRepository extends UserMemoryRepository implements IUserRepository, IUserWithPhoneRepository, IUserSaver {
    constructor() {
        super()
        this.users = [{
            id: 1,
            email: "user1@example.com",
            name: "User One"
        }, {
            id: 2,
            email: "user2@example.com",
            phone: "098-765-4321",
            name: "User Two"
        }]
    }

    async updateUserData({ id, name, phone }: IUserSaverRawData): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        this.users[userIndex].name = name;
        this.users[userIndex].phone = phone
    }
}