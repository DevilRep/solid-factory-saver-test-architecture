import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserMemoryInjectableRepository } from "./user.memory.injectable.repository";
import { UserWithEmailInjectableFactory } from "./user-with-email.injectable.factory";
import { UserWithEmailAndPhoneInjectableFactory } from "./user-with-email-and-phone.injectable.factory";
import { EditableUserWithEmailInjectableFactory } from "./editable-user-with-email.injectable.factory";

const repo = new UserMemoryInjectableRepository()

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserWithEmailFactory',
            useClass: UserWithEmailInjectableFactory
        },
        {
            provide: 'IUserWithEmailAndPhoneFactory',
            useClass: UserWithEmailAndPhoneInjectableFactory
        },
        {
            provide: 'IEditableUserWithEmailFactory',
            useClass: EditableUserWithEmailInjectableFactory
        },

        {
            provide: 'IUserRepository',
            useValue: repo,
        },
        {
            provide: 'IUserWithPhoneRepository',
            useValue: repo,
        },
        {
            provide: 'IUserSaver',
            useValue: repo,
        },
    ],
})
export class UserModule { }