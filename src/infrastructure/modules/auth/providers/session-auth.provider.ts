import { Inject, Injectable } from "@nestjs/common"
import { AuthenticationRegistry, SessionCookieProvider, SessionRecord } from "@nestjs/authentication"

import type { IAuthenticatedUser, IAuthenticatedUserFactory } from "@domain/user"

@Injectable()
export class SessionAuthProvider extends SessionCookieProvider<IAuthenticatedUser> {
    constructor(
        @Inject('IAuthenticatedUserFactory')
        private readonly factory: IAuthenticatedUserFactory,
        registry: AuthenticationRegistry
    ) {
        super()

        registry.registerProvider(this)
    }

    async validate(session: SessionRecord): Promise<IAuthenticatedUser | null> {
        try {
            return await this.factory.createAuthenticatedUser(+session.userId)
        } catch (error) {
            return Promise.resolve(null)
        }
    }
}