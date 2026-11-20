import { Body, Controller, Get, Inject, Put, Request, UseGuards } from "@nestjs/common"
import { Public } from "@nestjs/authentication"

import type {
    IAuthenticatedUser,
    IEditableUserFactory,
    IUserWithFullNameFactory
} from "@domain/user"

import { UserWithFullNameDto } from "../dto/user-with-full-name.dto"
import { EditableUserWithFullNameRawData } from "../dto/editable-user-with-full-name-raw-data.dto"
import { CustomJwtAuthGuard } from "../guards/custom-jwt-auth.guard"

@Controller({
    path: 'user',
    version: '2'
})
@Public()
@UseGuards(CustomJwtAuthGuard)
export class UserV2Controller {
    constructor(
        @Inject('IUserWithFullNameFactory')
        private readonly userWithFullNameFactory: IUserWithFullNameFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory,
    ) { }

    @Get('/')
    public async getUserWithFullNameById(
        @Request() request: {
            user: IAuthenticatedUser
        },
    ): Promise<UserWithFullNameDto> {
        const user = await this.userWithFullNameFactory.createUserWithFullName(request.user.id)
        return new UserWithFullNameDto(user)
    }

    @Put('/')
    public async updateProfileByJwtToken(
        @Body() data: EditableUserWithFullNameRawData,
        @Request() request: {
            user: IAuthenticatedUser
        },
    ): Promise<UserWithFullNameDto> {
        const user = await this.editableUserFactory.createUserForEdit(request.user.id)
        await user.change(data)
        return new UserWithFullNameDto(user)
    }
}