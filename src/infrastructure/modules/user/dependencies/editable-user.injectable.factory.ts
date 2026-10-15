import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithFullNameRepository, IUserSaver } from "@domain/user";
import { EditableUserFactory } from "@domain/user";

@Injectable()
export class EditableUserInjectableFactory extends EditableUserFactory {
    constructor(
        @Inject('IUserWithFullNameRepository')
        repository: IUserWithFullNameRepository,

        @Inject('IUserSaver')
        saver: IUserSaver
    ) {
        super(repository, saver)
    }
}