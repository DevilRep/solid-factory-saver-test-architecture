import { Inject, Injectable } from "@nestjs/common";

import type { IEditableUserWithEmailFactory, IUserSaver, IUserWithPhoneRepository } from "@domain/user";
import { EditableUserWithEmailFactory } from "@domain/user";

@Injectable()
export class EditableUserWithEmailInjectableFactory extends EditableUserWithEmailFactory implements IEditableUserWithEmailFactory {
    constructor(
        @Inject('IUserWithPhoneRepository')
        repository: IUserWithPhoneRepository,

        @Inject('IUserSaver')
        saver: IUserSaver
    ) {
        super(repository, saver)
    }
}