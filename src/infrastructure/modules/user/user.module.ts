import { Module } from "@nestjs/common"

import { UserV1Controller } from "./controllers/user-v1.controller"

import { UserWithFullNameInjectableFactory } from "./dependencies/user-with-full-name.injectable.factory"
import { EditableUserInjectableFactory } from "./dependencies/editable-user.injectable.factory"
import { AuthenticatedUserWithJwtAccessTokenInjectableFactory } from "./dependencies/authenticated-user-with-jwt-access-token.injectable.factory"
import { AuthenticatedUserInjectableFactory } from "./dependencies/authenticated-user.injectable.factory"

import { UserMemoryInjectableRepository } from "../user-repository/dependencies/user.memory.injectable.repository"

import { UserRepositoryModule } from "../user-repository/user-repository.module"

@Module({
    imports: [UserRepositoryModule],
    controllers: [UserV1Controller],
    providers: [
        {
            provide: 'IUserWithFullNameFactory',
            useClass: UserWithFullNameInjectableFactory
        },
        {
            provide: 'IEditableUserFactory',
            useClass: EditableUserInjectableFactory
        },
        {
            provide: 'IAuthenticatedUserByJwtAccessTokenFactory',
            useClass: AuthenticatedUserWithJwtAccessTokenInjectableFactory
        },
        {
            provide: 'IAuthenticatedUserFactory',
            useClass: AuthenticatedUserInjectableFactory
        },

        {
            provide: 'IUserWithFullNameRepository',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IAuthenticatedUserRepository',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IUserSaver',
            useExisting: UserMemoryInjectableRepository
        },
    ],
})
export class UserModule { }