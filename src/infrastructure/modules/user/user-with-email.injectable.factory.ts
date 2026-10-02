import { Inject, Injectable } from "@nestjs/common";

import type { IUserRepository, IUserWithEmailFactory } from "@domain/user";
import { UserWithEmailFactory } from "@domain/user";

@Injectable()
export class UserWithEmailInjectableFactory extends UserWithEmailFactory implements IUserWithEmailFactory {
    constructor(
        @Inject('IUserRepository')
        repository: IUserRepository
    ) {
        super(repository);
    }
}
