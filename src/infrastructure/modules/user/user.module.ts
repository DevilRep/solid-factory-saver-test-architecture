import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserInjectableFactory } from "./user.injectable.factory";
import { UserMemoryInjectableRepository } from "./user.memory.injectable.repository";

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserFactory',
            useClass: UserInjectableFactory,
        },
        {
            provide: 'IUserRepository',
            useClass: UserMemoryInjectableRepository,
        }
    ],
})
export class UserModule { }