import { Controller, Get, Inject, Param } from "@nestjs/common";

import type { IUserFactory } from "@domain/user";

import { UserInfoDto } from "./dto/user.info.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserFactory')
        private readonly userFactory: IUserFactory
    ) { }

    @Get(':id')
    public async getUserById(@Param('id') id: number): Promise<UserInfoDto> {
        return new UserInfoDto(await this.userFactory.create(+id));
    }
}