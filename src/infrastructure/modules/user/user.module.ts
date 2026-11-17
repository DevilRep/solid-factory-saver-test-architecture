import { Module } from "@nestjs/common"

import { UserController } from "./user.controller"

import { EditableUserWithFullNameInjectableFactroy } from "./dependencies/editable-user-with-full-namel.injectable.factory"
import { UserWithFullNameInjectableFactory } from "./dependencies/user-with-full-name.injectable.factory"
import { UserWithFullNameAndPhoneInjectableFactory } from "./dependencies/user-with-full-name-and-phone.injectable.factory"
import { EditableUserInjectableFactory } from "./dependencies/editable-user.injectable.factory"
import { AuthenticatedUserWithJwtAccessTokenInjectableFactory } from "./dependencies/authenticated-user-with-jwt-access-token.injectable.factory"
import { AuthenticatedUserInjectableFactory } from "./dependencies/authenticated-user.injectable.factory"

import { UserMemoryInjectableRepository } from "../user-repository/dependencies/user.memory.injectable.repository"

import { UserRepositoryModule } from "../user-repository/user-repository.module"

@Module({
    imports: [UserRepositoryModule],
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
            provide: 'IUserWithFullNameAndPhoneRepository',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IUserWithFullNameRepository',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IAuthenticableUserRepository',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IAuthenticatedUserRepository',
            useExisting: UserMemoryInjectableRepository
        },

        {
            provide: 'IUserWithFullNameSaver',
            useExisting: UserMemoryInjectableRepository
        },
        {
            provide: 'IUserSaver',
            useExisting: UserMemoryInjectableRepository
        },
    ],
})
export class UserModule { }