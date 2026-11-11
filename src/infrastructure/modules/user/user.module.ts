import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserMemoryInjectableRepository } from "./dependencies/user.memory.injectable.repository";
import { EditableUserWithFullNameInjectableFactroy } from "./dependencies/editable-user-with-full-namel.injectable.factory";
import { UserWithFullNameInjectableFactory } from "./dependencies/user-with-full-name.injectable.factory";
import { UserWithFullNameAndPhoneInjectableFactory } from "./dependencies/user-with-full-name-and-phone.injectable.factory";
import { EditableUserInjectableFactory } from "./dependencies/editable-user.injectable.factory";
import { AuthenticableUserWithGeneratingJwtTokensInjectableFactory } from "./dependencies/authenticable-user-with-generating-jwt-tokens.injectable.factory";
import { AuthenticatedUserWithJwtRefreshTokenInjectableFactory } from "./dependencies/authenticated-user-with-jwt-refresh-token.injectable.factory";
import { AuthenticatedUserWithJwtAccessTokenInjectableFactory } from "./dependencies/authenticated-user-with-jwt-access-token.injectable.factory";
import { AuthenticatedUserInjectableFactory } from "./dependencies/authenticated-user.injectable.factory";

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
            provide: 'IEditableUserFactory',
            useClass: EditableUserInjectableFactory
        },
        {
            provide: 'IAuthenticableUserWithJwtTokensFactory',
            useClass: AuthenticableUserWithGeneratingJwtTokensInjectableFactory
        },
        {
            provide: 'IAuthenticatedUserByJwtAccessTokenFactory',
            useClass: AuthenticatedUserWithJwtAccessTokenInjectableFactory
        },
        {
            provide: 'IAuthenticatedUserByJwtRefreshTokenFactory',
            useClass: AuthenticatedUserWithJwtRefreshTokenInjectableFactory
        },
        {
            provide: 'IAuthenticatedUserFactory',
            useClass: AuthenticatedUserInjectableFactory
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
            provide: 'IAuthenticableUserRepository',
            useValue: repo
        },
        {
            provide: 'IAuthenticatedUserRepository',
            useValue: repo
        },

        {
            provide: 'IUserWithFullNameSaver',
            useValue: repo
        },
        {
            provide: 'IUserSaver',
            useValue: repo
        },
    ],
})
export class UserModule { }