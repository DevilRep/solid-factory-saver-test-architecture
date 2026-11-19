import { Inject, Injectable } from "@nestjs/common"

import type { IAuthenticableUserRepository } from "@domain/user"
import { AuthenticableUserFactory } from "@domain/user"

@Injectable()
export class AuthenticableUserInjectableFactory extends AuthenticableUserFactory {
    constructor(
        @Inject('IAuthenticableUserRepository')
        repository: IAuthenticableUserRepository
    ) {
        super(repository)
    }
}