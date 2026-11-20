import { Body, Controller, Get, Inject, Param, Put, Headers, Version } from "@nestjs/common"
import { CurrentUser, Public } from "@nestjs/authentication"

import type {
    IAuthenticatedUser,
    IAuthenticatedUserByJwtAccessTokenFactory,
    IEditableUserFactory,
    IUserWithFullNameFactory
} from "@domain/user"

import { UserWithFullNameDto } from "../dto/user-with-full-name.dto"
import { EditableUserWithFullNameRawData } from "../dto/editable-user-with-full-name-raw-data.dto"

@Controller({
    path: 'user',
    version: '1'
})
export class UserV1Controller {
    constructor(
        @Inject('IUserWithFullNameFactory')
        private readonly userWithFullNameFactory: IUserWithFullNameFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory,

        @Inject('IAuthenticatedUserByJwtAccessTokenFactory')
        private readonly authenticatedUserWithJwtAccessTokenFactory: IAuthenticatedUserByJwtAccessTokenFactory,
    ) { }

    @Get('/')
    public async getUserWithFullNameById(
        @CurrentUser() authoricatedUser: IAuthenticatedUser
    ): Promise<UserWithFullNameDto> {
        const user = await this.userWithFullNameFactory.createUserWithFullName(authoricatedUser.id)
        return new UserWithFullNameDto(user)
    }

    @Put('/')
    public async updateProfileBySession(
        @Body() data: EditableUserWithFullNameRawData,
        @CurrentUser() authenticatedUser: IAuthenticatedUser
    ): Promise<UserWithFullNameDto> {
        const user = await this.editableUserFactory.createUserForEdit(authenticatedUser.id)
        await user.change(data)
        return new UserWithFullNameDto(user)
    }

    @Version('2')
    @Public()
    @Put('/')
    public async updateProfileByJwtToken(
        @Body() data: EditableUserWithFullNameRawData,
        @Headers('Authorization') authToken: string
    ): Promise<UserWithFullNameDto> {
        // this is only an example, in a real application you would use a middleware to extract the user
        const authenticatedUser = await this.authenticatedUserWithJwtAccessTokenFactory.createAuthenticatedUserByJwtAccessToken(authToken?.split(' ')[1])

        const user = await this.editableUserFactory.createUserForEdit(authenticatedUser.id)
        await user.change(data)
        return new UserWithFullNameDto(user)
    }
}