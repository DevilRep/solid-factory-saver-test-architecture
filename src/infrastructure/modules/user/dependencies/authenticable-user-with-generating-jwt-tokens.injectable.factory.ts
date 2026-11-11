import { Inject, Injectable } from "@nestjs/common"

import type { IAuthenticableUserRepository } from "@domain/user"
import { AuthenticableUserWithGeneratingJwtTokensFactory } from "@domain/user"

@Injectable()
export class AuthenticableUserWithGeneratingJwtTokensInjectableFactory extends AuthenticableUserWithGeneratingJwtTokensFactory {
    constructor(
        @Inject('IAuthenticableUserRepository')
        repository: IAuthenticableUserRepository
    ) {
        super(repository)
    }
}