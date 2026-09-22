import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserInjectableFactory } from "./user.injectable.factory";
import { UserMemoryInjectableRepository } from "./user.memory.injectable.repository";
import { UserWithPhoneInjectableFactory } from "./user-with-phone.injectable.factory";

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
            provide: 'IUserRepository',
            useClass: UserMemoryInjectableRepository,
        },
        {
            provide: 'IUserWithPhoneRepository',
            useClass: UserMemoryInjectableRepository,
        },
    ],
})
export class UserModule { }