import { Inject, Injectable } from "@nestjs/common"

import type { IAuthenticatedUserRepository } from "@domain/user"
import { AuthenticatedUserFactory } from "@domain/user"

@Injectable()
export class AuthenticatedUserInjectableFactory extends AuthenticatedUserFactory {
    constructor(
        @Inject('IAuthenticatedUserRepository')
        repository: IAuthenticatedUserRepository
    ) {
        super(repository)
    }
}