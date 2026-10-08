import { IUserWithFullNameAndPhoneRawRepositoryData, IUserWithFullNameAndPhoneRepository, IUserWithFullNameRepository, IUserWithFullNameRepositoryData, IUserWithFullNameSaver, IUserWithFullNameSaverRawData } from "@domain/user";
import { UserV2MemoryRepository } from "./user-v2.memory.repository";

export class UserV3MemoryRepository extends UserV2MemoryRepository implements IUserWithFullNameRepository, IUserWithFullNameSaver, IUserWithFullNameAndPhoneRepository {
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

    async saveUserWithFullName({
        id, firstName, lastName, phone
    }: IUserWithFullNameSaverRawData): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        this.users[userIndex].firstName = firstName
        this.users[userIndex].lastName = lastName
        // for compatibility
        this.users[userIndex].name = firstName && lastName ? `${firstName} ${lastName}` : firstName || lastName

        this.users[userIndex].phone = phone
    }

    async getUserWithFullNameAndPhoneById(id: number): Promise<IUserWithFullNameAndPhoneRawRepositoryData> {
        const userData = this.users.find(user => user.id === id);
        if (!userData) {
            throw new Error(`User with id ${id} not found`);
        }
        return Promise.resolve({
            id,
            email: userData.email,
            firstName: userData.firstName || '',
            lastName: userData.lastName || '',
            phone: userData.phone || ''
        })
    }
}