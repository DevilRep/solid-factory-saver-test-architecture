import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithPhoneRepository, IUserSaver } from "@domain/user"

import { EditableUserFactory, IEditableUserFactory } from "@domain/user";

@Injectable()
export class EditableUserInjectableFactory extends EditableUserFactory implements IEditableUserFactory {
    constructor(
        @Inject('IUserWithPhoneRepository')
        userRepository: IUserWithPhoneRepository,

        @Inject('IUserSaver')
        userSaver: IUserSaver
    ) {
        super(userRepository, userSaver);
    }
}