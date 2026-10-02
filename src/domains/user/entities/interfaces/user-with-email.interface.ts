import { Email } from "../../object-values/email";
import { IReadableUser } from "./user.interface";

export interface IReadableUserWithEmail extends IReadableUser {
    readonly emailVO: Email;
}