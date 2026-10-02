import { Body, Controller, Get, Inject, Param, Put } from "@nestjs/common";

import type { IEditableUserFactory, IUserFactory, IUserWithPhoneFactory } from "@domain/user";

import { UserInfoDto } from "./dto/user.info.dto";
import { UserWithPhoneDto } from "./dto/user-with-phone.info.dto";
import { EditableUserDataDto } from "./dto/editable-user-data.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserFactory')
        private readonly userFactory: IUserFactory,

        @Inject('IUserWithPhoneFactory')
        private readonly userWithPhoneFactory: IUserWithPhoneFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory
    ) { }

    @Get(':id')
    public async getUserById(@Param('id') id: number): Promise<UserInfoDto> {
        return new UserInfoDto(await this.userFactory.create(+id));
    }

    @Get('with-phone/:id')
    public async getUserWithPhoneById(@Param('id') id: number): Promise<UserWithPhoneDto> {
        return new UserWithPhoneDto(await this.userWithPhoneFactory.createWithPhone(+id));
    }

    @Put(':id')
    public async updateUserData(
        @Param('id') id: number,
        @Body() data: EditableUserDataDto
    ): Promise<UserWithPhoneDto> {
        const user = await this.editableUserFactory.createUserForEdit(+id)
        await user.change(data)
        return new UserWithPhoneDto(user);
    }
}