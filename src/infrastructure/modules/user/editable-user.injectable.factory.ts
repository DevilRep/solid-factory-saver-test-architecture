import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithPhoneRepository, IUserSaver } from "@domain/user"
import { EditableUserWithUpdatingPhoneFactory, IEditableUserFactory } from "@domain/user";

@Injectable()
export class EditableUserInjectableFactory extends EditableUserWithUpdatingPhoneFactory implements IEditableUserFactory {
    constructor(
        @Inject('IUserWithPhoneRepository')
        userRepository: IUserWithPhoneRepository,

        @Inject('IUserSaver')
        userSaver: IUserSaver
    ) {
        super(userRepository, userSaver);
    }
}