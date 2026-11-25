import { Body, Controller, Inject, Post } from '@nestjs/common'
import { Public } from '@nestjs/authentication'

import type { IUnregisteredUserFactory } from '@domain/user'

import { SignUpRawDataDto } from '../dto/sigh-up-raw-data.dto'
import { SignedUpUserDto } from '../dto/signed-up-user.dto'

@Public()
@Controller('auth/sign-up')
export class SignUpController {
    constructor(
        @Inject('IUnregisteredUserFactory')
        private readonly unregisteredUserFactory: IUnregisteredUserFactory
    ) { }

    @Post('/')
    public async signUp(
        @Body() { email, firstName, lastName, password }: SignUpRawDataDto
    ): Promise<SignedUpUserDto> {
        const unregisteredUser = await this.unregisteredUserFactory.createUnregisteredUser({
            email,
            firstName,
            lastName
        })

        const registeredUser = await unregisteredUser.signUp(password)

        return new SignedUpUserDto(registeredUser)
    }
}
