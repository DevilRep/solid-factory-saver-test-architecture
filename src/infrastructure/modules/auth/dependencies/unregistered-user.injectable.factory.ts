import { Inject, Injectable } from "@nestjs/common"

import type { IPotentialSameUserRepository, ISignUpUserSaver } from "@domain/user"
import { UnregisteredUserFactory } from "@domain/user"

@Injectable()
export class UnregisteredUserInjectableFactory extends UnregisteredUserFactory {
    constructor(
        @Inject('IPotentialSameUserRepository')
        repository: IPotentialSameUserRepository,

        @Inject('ISignUpUserSaver')
        saver: ISignUpUserSaver
    ) {
        super(repository, saver)
    }
}