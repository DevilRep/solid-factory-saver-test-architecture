import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithFullNameFactory, IUserWithFullNameRepository } from "@domain/user";
import { UserWithFullNameFactory } from "@domain/user"

@Injectable()
export class UserWithFullNameInjectableFactory extends UserWithFullNameFactory implements IUserWithFullNameFactory {
    constructor(
        @Inject('IUserWithFullNameRepository')
        repository: IUserWithFullNameRepository
    ) {
        super(repository)
    }
}