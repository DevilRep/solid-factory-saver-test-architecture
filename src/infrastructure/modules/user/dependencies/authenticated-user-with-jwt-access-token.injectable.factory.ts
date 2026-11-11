import { Inject, Injectable } from "@nestjs/common"

import type { IAuthenticatedUserFactory } from "@domain/user"
import { AuthenticatedUserWithJwtAccessTokenFactory } from "@domain/user"

@Injectable()
export class AuthenticatedUserWithJwtAccessTokenInjectableFactory extends AuthenticatedUserWithJwtAccessTokenFactory {
    constructor(
        @Inject('IAuthenticatedUserFactory')
        authenticatedUserFactory: IAuthenticatedUserFactory
    ) {
        super(authenticatedUserFactory)
    }
} 