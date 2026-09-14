import { IUserDtoData } from "../interfaces/user.dto.data";

export class UserDto {
    constructor(user: IUserDtoData) {
        this.email = user.email;
    }

    readonly email: string;
}