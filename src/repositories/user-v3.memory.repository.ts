import {
    IAuthenticatedUserRepository,
    IUserSaver,
    IUserSaverRawData,
    IUserWithFullNameRepository,
    IUserWithFullNameRepositoryData,
    IAuthenticableUserRepository,
    IAuthenticableUserRawData,
    ISignUpUserSaver,
    IPotentialSameUserRepository,
    IPotentialSameUserRawData,
    ISignUpUserRawData,
    ISignUpUserResult,
} from "@domain/user";

interface IUserMemoryRepositoryData {
    readonly id: number;
    readonly email: string;

    name?: string;
    firstName?: string;
    lastName?: string;
    password: string;
}

export class UserV3MemoryRepository implements
    IUserWithFullNameRepository,
    IAuthenticatedUserRepository,
    IAuthenticableUserRepository,
    IPotentialSameUserRepository,
    IUserSaver,
    ISignUpUserSaver {
    protected users: IUserMemoryRepositoryData[] = []

    constructor() {
        this.users = [
            {
                id: 1,
                email: "user1@example.com",
                name: "User One",
                firstName: "User",
                lastName: "One",
                password: "$2b$10$.d4b4CKmgIZVxXecvkRco.jbf8rEQ1t.mDbd9qCgqSW2POMY/Mu8." // test1
            },
            {
                id: 2,
                email: "user2@example.com",
                name: "User Two",
                firstName: "User",
                lastName: "Two",
                password: "hashed_password"
            },
            {
                id: 3,
                email: "user3.example.com",
                name: "User Three",
                firstName: "User",
                lastName: "Three",
                password: "hashed_password"
            },
        ]
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

    async saveUserData({ id, firstName, lastName }: IUserSaverRawData): Promise<void> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }

        this.users[userIndex].firstName = firstName
        this.users[userIndex].lastName = lastName
    }

    async isExist(id: number): Promise<boolean> {
        const userIndex = this.users.findIndex(user => user.id === id);

        return userIndex > -1
    }

    async getUserWithPassword(email: string): Promise<IAuthenticableUserRawData> {
        const userData = this.users.find(user => user.email === email);
        if (!userData) {
            throw new Error(`User with email ${email} not found`);
        }
        return Promise.resolve({
            id: userData.id,
            password: userData.password
        });
    }

    async getUserByEmail(email: string): Promise<IPotentialSameUserRawData> {
        const userData = this.users.find(user => user.email === email);
        if (!userData) {
            throw new Error(`User with email ${email} not found`);
        }
        return Promise.resolve({
            id: userData.id,
            email: userData.email
        });
    }

    async createNewUser(data: ISignUpUserRawData): Promise<ISignUpUserResult> {
        const newRecord = { ...data, id: this.users.length + 1 }

        this.users.push(newRecord)

        return {
            id: newRecord.id,
            firstName: newRecord.firstName || '',
            lastName: newRecord.lastName || '',
            email: newRecord.email,
        }
    }
}