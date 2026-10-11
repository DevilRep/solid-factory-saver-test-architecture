import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserMemoryInjectableRepository } from "./dependencies/user.memory.injectable.repository";
import { EditableUserWithFullNameInjectableFactroy } from "./dependencies/editable-user-with-full-namel.injectable.factory";
import { UserWithFullNameInjectableFactory } from "./dependencies/user-with-full-name.injectable.factory";
import { UserWithFullNameAndPhoneInjectableFactory } from "./dependencies/user-with-full-name-and-phone.injectable.factory";

const repo = new UserMemoryInjectableRepository()

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IEditableUserWithFullNameFactory',
            useClass: EditableUserWithFullNameInjectableFactroy
        },
        {
            provide: 'IUserWithFullNameFactory',
            useClass: UserWithFullNameInjectableFactory
        },
        {
            provide: 'IUserWithFullNameAndPhoneFactory',
            useClass: UserWithFullNameAndPhoneInjectableFactory
        },

        {
            provide: 'IUserWithFullNameAndPhoneRepository',
            useValue: repo
        },
        {
            provide: 'IUserWithFullNameRepository',
            useValue: repo
        },

        {
            provide: 'IUserWithFullNameSaver',
            useValue: repo
        },
    ],
})
export class UserModule { }