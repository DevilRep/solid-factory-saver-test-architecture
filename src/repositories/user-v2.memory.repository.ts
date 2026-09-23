import { IUserRepository, IUserWithPhoneRepository } from "@domain/user";

import { UserMemoryRepository } from "./user.memory.repository";

export class UserMemoryRepository2 extends UserMemoryRepository implements IUserRepository, IUserWithPhoneRepository {
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
}