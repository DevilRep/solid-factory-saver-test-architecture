import { Email } from "../../object-values/email";
import { IWritableUser } from "./writable-user.interface";

export interface IWritableUserWithEmail extends IWritableUser {
    emailVO: Email;
}