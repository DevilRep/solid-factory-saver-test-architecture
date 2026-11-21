import { AuthenticationRegistry, JwtBearerProvider, JwtClaims } from "@nestjs/authentication"

import type { IAuthenticatedUser, IAuthenticatedUserFactory } from "@domain/user"
import { Inject } from "@nestjs/common"

export class JwtAuthProvider extends JwtBearerProvider<IAuthenticatedUser> {
    constructor(
        registry: AuthenticationRegistry,

        @Inject('IAuthenticatedUserFactory')
        private readonly userFactory: IAuthenticatedUserFactory,
    ) {
        super()

        registry.registerProvider(this, { order: 1 })
    }

    protected async validate({ sub }: JwtClaims): Promise<IAuthenticatedUser | null> {
        return sub ? await this.userFactory.createAuthenticatedUser(+sub) : null
    }
}