import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common"
import { Request } from "express"

import type { IAuthenticatedUserByJwtAccessTokenFactory } from "@domain/user"

@Injectable()
export class CustomJwtAuthGuard implements CanActivate {
    constructor(
        @Inject('IAuthenticatedUserByJwtAccessTokenFactory')
        private readonly authenticatedUserFactory: IAuthenticatedUserByJwtAccessTokenFactory,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<Request>()

        try {
            const authenticatedUser = await this.authenticatedUserFactory.createAuthenticatedUserByJwtAccessToken(
                this.getTokenFromHeaders(request) || ''
            )

            request['user'] = authenticatedUser

            return true
        } catch (error) {
            return false
        }
    }

    protected getTokenFromHeaders(request: Request): string | undefined {
        const [type, token] = request.header('Authorization')?.split(' ') || []

        return type === 'Bearer' ? token : undefined
    }
}