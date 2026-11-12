import { Body, Controller, Get, Inject, Param, Post, Put, Version, VERSION_NEUTRAL, Headers } from "@nestjs/common"

import type {
    AuthenticableUserWithGeneratingJwtTokensFactory,
    AuthenticatedUserWithJwtAccessTokenFactory,
    AuthenticatedUserWithJwtRefreshTokenFactory,
    IEditableUserFactory,
    IEditableUserWithFullNameFactory,
    IUserWithFullNameAndPhoneFactory,
    IUserWithFullNameFactory
} from "@domain/user"

import { EditableUserWithFullNameDataDto } from "./dto/editable-user-with-full-name-data.dto"
import { UserWithFullNameAndPhoneDto } from "./dto/user-with-full-name-and-phone.dto"
import { EditableUserRawDataDto } from "./dto/editable-user-raw-data.dto"
import { UserWithFullNameDto } from "./dto/user-with-full-name.dto"
import { EditableUserWithFullNameRawData } from "./dto/editable-user-with-full-name-raw-data.dto"
import { AuthenticatedUserWithJwtTokensDto } from "./dto/authenticated-user-with-jwt-tokens.dto"
import { SignInRawDataDto } from "./dto/sign-in-raw-data.dto"

@Controller('user')
export class UserController {
    constructor(
        @Inject('IEditableUserWithFullNameFactory')
        private readonly editableUserWithFullNameFactory: IEditableUserWithFullNameFactory,

        @Inject('IUserWithFullNameFactory')
        private readonly userWithFullNameFactory: IUserWithFullNameFactory,

        @Inject('IUserWithFullNameAndPhoneFactory')
        private readonly userWithFullNameAndPhoneFactory: IUserWithFullNameAndPhoneFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory,

        @Inject('IAuthenticableUserWithJwtTokensFactory')
        private readonly authenticableUserWithGeneratingJwtTokensFactory: AuthenticableUserWithGeneratingJwtTokensFactory,

        @Inject('IAuthenticatedUserByJwtAccessTokenFactory')
        private readonly authenticatedUserWithJwtAccessTokenFactory: AuthenticatedUserWithJwtAccessTokenFactory,

        @Inject('IAuthenticatedUserByJwtRefreshTokenFactory')
        private readonly authenticatedUserWithJwtRefreshTokenFactory: AuthenticatedUserWithJwtRefreshTokenFactory
    ) { }

    /**
     * @deprecated
     */
    @Put(':id')
    public async updateUserWithFullNameData(
        @Param('id') id: number,
        @Body() data: EditableUserRawDataDto
    ): Promise<UserWithFullNameAndPhoneDto> {
        const user = await this.editableUserWithFullNameFactory.createUserForEdit(+id)
        await user.change(new EditableUserWithFullNameDataDto(data))
        return new UserWithFullNameAndPhoneDto(user)
    }

    /**
     * @deprecated
     */
    @Version(VERSION_NEUTRAL)
    @Get('with-phone/:id')
    public async getUserWithFullNameAndPhoneById(
        @Param('id') id: number
    ): Promise<UserWithFullNameAndPhoneDto> {
        const user = await this.userWithFullNameAndPhoneFactory.createUserWithFullNameAndPhone(+id)
        return new UserWithFullNameAndPhoneDto(user)
    }

    @Version([VERSION_NEUTRAL, '2'])
    @Get(':id')
    public async getUserWithFullNameById(
        @Param('id') id: number
    ): Promise<UserWithFullNameDto> {
        const user = await this.userWithFullNameFactory.createUserWithFullName(+id)
        return new UserWithFullNameDto(user)
    }

    @Version('2')
    @Put(':id')
    public async updateUserData(
        @Param('id') id: number,
        @Body() data: EditableUserWithFullNameRawData
    ): Promise<UserWithFullNameDto> {
        const user = await this.editableUserFactory.createUserForEdit(+id)
        await user.change(data)
        return new UserWithFullNameDto(user)
    }

    @Post('/sign-in')
    public async signIn(
        @Body() { email, password }: SignInRawDataDto
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const user = await this.authenticableUserWithGeneratingJwtTokensFactory.createUserWithJwtTokensForSignIn(email)
        const tokens = await user.signIn(password)
        return new AuthenticatedUserWithJwtTokensDto(user, tokens)
    }

    @Version('3')
    @Put('/')
    public async updateProfile(
        @Body() data: EditableUserWithFullNameRawData,
        @Headers('Authorization') authToken: string
    ): Promise<UserWithFullNameDto> {
        // this is only an example, in a real application you would use a middleware to extract the user
        const authenticatedUser = await this.authenticatedUserWithJwtAccessTokenFactory.createAuthenticatedUserByJwtAccessToken(authToken.split(' ')[1])

        const user = await this.editableUserFactory.createUserForEdit(authenticatedUser.id)
        await user.change(data)
        return new UserWithFullNameDto(user)
    }

    @Version('3')
    @Post('/auth-by-refresh-token')
    public async getNewTokensByRefreshToken(
        @Headers('Authorization') authToken: string
    ): Promise<AuthenticatedUserWithJwtTokensDto> {
        const user = await this.authenticatedUserWithJwtRefreshTokenFactory.createAuthenticatedUserByJwtRefreshToken(authToken.split(' ')[1])
        const tokens = await user.generateNewAuthTokens()
        return new AuthenticatedUserWithJwtTokensDto(user, tokens)
    }
}