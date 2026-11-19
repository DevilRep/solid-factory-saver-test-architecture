import { Body, Controller, Get, Inject, Param, Put, Headers } from "@nestjs/common"

import type {
    IAuthenticatedUserByJwtAccessTokenFactory,
    IEditableUserFactory,
    IUserWithFullNameFactory
} from "@domain/user"

import { UserWithFullNameDto } from "./dto/user-with-full-name.dto"
import { EditableUserWithFullNameRawData } from "./dto/editable-user-with-full-name-raw-data.dto"
import { Public } from "@nestjs/authentication"

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserWithFullNameFactory')
        private readonly userWithFullNameFactory: IUserWithFullNameFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory,

        @Inject('IAuthenticatedUserByJwtAccessTokenFactory')
        private readonly authenticatedUserWithJwtAccessTokenFactory: IAuthenticatedUserByJwtAccessTokenFactory,
    ) { }

    @Get(':id')
    public async getUserWithFullNameById(
        @Param('id') id: number
    ): Promise<UserWithFullNameDto> {
        const user = await this.userWithFullNameFactory.createUserWithFullName(+id)
        return new UserWithFullNameDto(user)
    }

    @Public()
    @Put('/by-jwt-token')
    public async updateProfile(
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