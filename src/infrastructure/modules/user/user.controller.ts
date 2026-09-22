import { Controller, Get, Inject, Param } from "@nestjs/common";

import type { IUserFactory, IUserWithPhoneFactory } from "@domain/user";

import { UserInfoDto } from "./dto/user.info.dto";
import { UserWithPhoneDto } from "./dto/user.-with-phone.info.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserFactory')
        private readonly userFactory: IUserFactory,

        @Inject('IUserWithPhoneFactory')
        private readonly userWithPhoneFactory: IUserWithPhoneFactory
    ) { }

    @Get(':id')
    public async getUserById(@Param('id') id: number): Promise<UserInfoDto> {
        return new UserInfoDto(await this.userFactory.create(+id));
    }

    @Get('with-phone/:id')
    public async getUserWithPhoneById(@Param('id') id: number): Promise<UserWithPhoneDto> {
        return new UserWithPhoneDto(await this.userWithPhoneFactory.createWithPhone(+id));
    }
}