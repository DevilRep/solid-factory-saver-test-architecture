import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserInjectableFactory } from "./user.injectable.factory";
import { UserWithPhoneInjectableFactory } from "./user-with-phone.injectable.factory";
import { EditableUserInjectableFactory } from "./editable-user.injectable.factory";
import { UserMemoryInjectableRepository } from "./user.memory.injectable.repository";
import { UserWithEmailInjectableFactory } from "./user-with-email.injectable.factory";
import { UserWithEmailAndPhoneInjectableFactory } from "./user-with-email-and-phone.injectable.factory";

const repo = new UserMemoryInjectableRepository()

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserFactory',
            useClass: UserInjectableFactory,
        },
        {
            provide: 'IUserWithPhoneFactory',
            useClass: UserWithPhoneInjectableFactory,
        },
        {
            provide: 'IEditableUserFactory',
            useClass: EditableUserInjectableFactory
        },
        {
            provide: 'IUserWithEmailFactory',
            useClass: UserWithEmailInjectableFactory
        },
        {
            provide: 'IUserWithEmailAndPhoneFactory',
            useClass: UserWithEmailAndPhoneInjectableFactory
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