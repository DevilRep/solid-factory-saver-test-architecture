import { Body, Controller, Get, Inject, Param, Put } from "@nestjs/common";

import type { IEditableUserFactory, IUserFactory, IUserWithEmailAndPhoneFactory, IUserWithEmailFactory, IUserWithPhoneFactory } from "@domain/user";

import { UserInfoDto } from "./dto/user.info.dto";
import { UserWithPhoneDto } from "./dto/user.-with-phone.info.dto";
import { EditableUserDataDto } from "./dto/editable-user-data.dto";
import { UserWithEmailDto } from "./dto/user-with-email.dto";
import { UserWithEmailAndPhoneDto } from "./dto/user-with-email-and-phone.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserFactory')
        private readonly userFactory: IUserFactory,

        @Inject('IUserWithPhoneFactory')
        private readonly userWithPhoneFactory: IUserWithPhoneFactory,

        @Inject('IEditableUserFactory')
        private readonly editableUserFactory: IEditableUserFactory,

        @Inject('IUserWithEmailFactory')
        private readonly userWithEmailFactory: IUserWithEmailFactory,

        @Inject('IUserWithEmailAndPhoneFactory')
        private readonly userWithEmailAndPhoneFactory: IUserWithEmailAndPhoneFactory
    ) { }

    /**
     * @deprecated
     */
    public async getUserById(@Param('id') id: number): Promise<UserInfoDto> {
        return new UserInfoDto(await this.userFactory.create(+id));
    }

    @Get(':id')
    public async getUserWithEmailById(@Param('id') id: number): Promise<UserWithEmailDto> {
        return new UserWithEmailDto(await this.userWithEmailFactory.createUserWithEmail(+id));

    }

    /**
     * @deprecated
     */
    public async getUserWithPhoneById(@Param('id') id: number): Promise<UserWithPhoneDto> {
        return new UserWithPhoneDto(await this.userWithPhoneFactory.createWithPhone(+id));
    }

    @Get('with-phone/:id')
    public async getUserWithEmailAndPhoneById(@Param('id') id: number): Promise<UserWithEmailAndPhoneDto> {
        return new UserWithEmailAndPhoneDto(await this.userWithEmailAndPhoneFactory.createUserWithEmailAndPhone(+id));
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