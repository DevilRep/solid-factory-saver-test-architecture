import { Controller, Get, Inject, Param } from "@nestjs/common";

import type { IUserFactory } from "@domain/user";

import { UserDto } from "./dto/user.dto";

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserFactory')
        private readonly userFactory: IUserFactory
    ) { }

    @Get(':id')
    public async getUserById(@Param('id') id: number): Promise<UserDto> {
        return new UserDto(await this.userFactory.create(+id));
    }
}