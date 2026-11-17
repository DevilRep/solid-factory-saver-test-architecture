import { Inject, Injectable } from "@nestjs/common"

import type { IAuthenticatedUserFactory } from "@domain/user"
import { AuthenticatedUserWithJwtRefreshTokenFactory } from "@domain/user"

@Injectable()
export class AuthenticatedUserWithJwtRefreshTokenInjectableFactory extends AuthenticatedUserWithJwtRefreshTokenFactory {
    constructor(
        @Inject('IAuthenticatedUserFactory')
        authenticatedUserFactory: IAuthenticatedUserFactory
    ) {
        super(authenticatedUserFactory)
    }
}