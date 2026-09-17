import { IUserInfoDtoData } from "../interfaces/user.info.dto.data";

export class UserInfoDto {
    constructor(user: IUserInfoDtoData) {
        this.email = user.email;
    }

    readonly email: string;
}