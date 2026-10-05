import { Body, Controller, Get, Inject, Param, Put } from "@nestjs/common";

import type { IEditableUserWithEmailFactory, IUserWithEmailAndPhoneFactory, IUserWithEmailFactory } from "@domain/user";

import { EditableUserDataDto } from "./dto/editable-user-data.dto";
import { UserWithEmailDto } from "./dto/user-with-email.dto";
import { UserWithEmailAndPhoneDto } from "./dto/user-with-email-and-phone.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserWithEmailFactory')
        private readonly userWithEmailFactory: IUserWithEmailFactory,

        @Inject('IUserWithEmailAndPhoneFactory')
        private readonly userWithEmailAndPhoneFactory: IUserWithEmailAndPhoneFactory,

        @Inject('IEditableUserWithEmailFactory')
        private readonly editableUserWithEmailFactory: IEditableUserWithEmailFactory
    ) { }

    @Get(':id')
    public async getUserWithEmailById(@Param('id') id: number): Promise<UserWithEmailDto> {
        return new UserWithEmailDto(await this.userWithEmailFactory.createUserWithEmail(+id));

    }

    @Get('with-phone/:id')
    public async getUserWithEmailAndPhoneById(@Param('id') id: number): Promise<UserWithEmailAndPhoneDto> {
        return new UserWithEmailAndPhoneDto(await this.userWithEmailAndPhoneFactory.createUserWithEmailAndPhone(+id));
    }

    @Put(':id')
    public async updateUserWithEmailData(
        @Param('id') id: number,
        @Body() data: EditableUserDataDto
    ): Promise<UserWithEmailAndPhoneDto> {
        const user = await this.editableUserWithEmailFactory.createUserForEdit(+id)
        await user.change(data)
        return new UserWithEmailAndPhoneDto(user);
    }
}