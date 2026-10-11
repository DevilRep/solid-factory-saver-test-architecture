import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithFullNameAndPhoneFactory, IUserWithFullNameAndPhoneRepository } from "@domain/user";
import { UserWithFullNameAndPhoneFactory } from "@domain/user"

@Injectable()
export class UserWithFullNameAndPhoneInjectableFactory extends UserWithFullNameAndPhoneFactory implements IUserWithFullNameAndPhoneFactory {
    constructor(
        @Inject('IUserWithFullNameAndPhoneRepository')
        repository: IUserWithFullNameAndPhoneRepository
    ) {
        super(repository)
    }
}