import { Inject, Injectable } from "@nestjs/common"

import type { IUserWithFullNameAndPhoneRepository, IUserWithFullNameSaver } from "@domain/user"
import { EditableUserWithFullNameFactory, IEditableUserWithFullNameFactory } from "@domain/user"

@Injectable()
export class EditableUserWithFullNameInjectableFactroy extends EditableUserWithFullNameFactory implements IEditableUserWithFullNameFactory {
    constructor(
        @Inject('IUserWithFullNameAndPhoneRepository')
        repository: IUserWithFullNameAndPhoneRepository,

        @Inject('IUserWithFullNameSaver')
        saver: IUserWithFullNameSaver
    ) {
        super(repository, saver)
    }
}