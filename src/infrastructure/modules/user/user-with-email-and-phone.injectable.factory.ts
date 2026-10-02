import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithEmailAndPhoneFactory, IUserWithPhoneRepository } from "@domain/user";
import { UserWithEmailAndPhoneFactory } from "@domain/user";

@Injectable()
export class UserWithEmailAndPhoneInjectableFactory extends UserWithEmailAndPhoneFactory implements IUserWithEmailAndPhoneFactory {
    constructor(
        @Inject('IUserWithPhoneRepository')
        repository: IUserWithPhoneRepository
    ) {
        super(repository);
    }
}