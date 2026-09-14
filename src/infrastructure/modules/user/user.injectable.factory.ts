import { Inject, Injectable } from "@nestjs/common";

import type { IUserFactory, IUserRepository } from "@domain/user";
import { UserFactory } from "@domain/user";

@Injectable()
export class UserInjectableFactory extends UserFactory implements IUserFactory {
    constructor(
        @Inject('IUserRepository')
        userRepository: IUserRepository
    ) {
        super(userRepository);
    }
}