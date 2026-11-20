import { Body, Controller, Get, Inject, Put } from "@nestjs/common"
import { CurrentUser } from "@nestjs/authentication"

import type {
    IAuthenticatedUser,
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
}