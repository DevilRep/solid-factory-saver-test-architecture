import { Inject, Injectable } from "@nestjs/common";

import type { IUserWithPhoneFactory, IUserWithPhoneRepository } from "@domain/user";
import { UserWithPhoneFactory } from "@domain/user";

@Injectable()
export class UserWithPhoneInjectableFactory extends UserWithPhoneFactory implements IUserWithPhoneFactory {
    constructor(
        @Inject('IUserWithPhoneRepository')
        userRepository: IUserWithPhoneRepository) {
        super(userRepository);
    }
}