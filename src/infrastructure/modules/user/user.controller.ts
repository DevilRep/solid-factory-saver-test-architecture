import { Body, Controller, Get, Inject, Param, Put } from "@nestjs/common";

import type { IEditableUserWithEmailFactory, IEditableUserWithFullNameFactory, IUserWithEmailAndPhoneFactory, IUserWithEmailFactory, IUserWithFullNameFactory } from "@domain/user";

import { EditableUserDataDto } from "./dto/editable-user-data.dto";
import { UserWithEmailDto } from "./dto/user-with-email.dto";
import { UserWithEmailAndPhoneDto } from "./dto/user-with-email-and-phone.dto";
import { EditableUserWithFullNameDataDto } from "./dto/editable-user-with-full-name-data.dto";
import { UserWithFullNameAndPhoneDto } from "./dto/user-with-full-name-and-phone.dto";
import { EditableUserRawDataDto } from "./dto/editable-user-raw-data.dto";
import { UserWithFullNameDto } from "./dto/user-with-full-name.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserWithEmailFactory')
        private readonly userWithEmailFactory: IUserWithEmailFactory,

        @Inject('IUserWithEmailAndPhoneFactory')
        private readonly userWithEmailAndPhoneFactory: IUserWithEmailAndPhoneFactory,

        @Inject('IEditableUserWithEmailFactory')
        private readonly editableUserWithEmailFactory: IEditableUserWithEmailFactory,

        @Inject('IEditableUserWithFullNameFactory')
        private readonly editableUserWithFullNameFactory: IEditableUserWithFullNameFactory,

        @Inject('IUserWithFullNameFactory')
        private readonly userWithFullNameFactory: IUserWithFullNameFactory
    ) { }

    /**
     * @depricated
     */
    public async getUserWithEmailById(@Param('id') id: number): Promise<UserWithEmailDto> {
        return new UserWithEmailDto(await this.userWithEmailFactory.createUserWithEmail(+id));

    }

    @Get(':id')
    public async getUserWithFullNameById(
        @Param('id') id: number
    ): Promise<UserWithFullNameDto> {
        const user = await this.userWithFullNameFactory.createUserWithFullName(+id)
        return new UserWithFullNameDto(user)
    }

    @Get('with-phone/:id')
    public async getUserWithEmailAndPhoneById(@Param('id') id: number): Promise<UserWithEmailAndPhoneDto> {
        return new UserWithEmailAndPhoneDto(await this.userWithEmailAndPhoneFactory.createUserWithEmailAndPhone(+id));
    }

    /**
     * @deprecated
     */
    public async updateUserWithEmailData(
        @Param('id') id: number,
        @Body() data: EditableUserDataDto
    ): Promise<UserWithEmailAndPhoneDto> {
        const user = await this.editableUserWithEmailFactory.createUserForEdit(+id)
        await user.change(data)
        return new UserWithEmailAndPhoneDto(user);
    }

    @Put(':id')
    public async updateUserWithFullNameData(
        @Param('id') id: number,
        @Body() data: EditableUserRawDataDto
    ): Promise<UserWithFullNameAndPhoneDto> {
        const user = await this.editableUserWithFullNameFactory.createUserForEdit(+id)
        await user.change(new EditableUserWithFullNameDataDto(data))
        return new UserWithFullNameAndPhoneDto(user)
    }
}