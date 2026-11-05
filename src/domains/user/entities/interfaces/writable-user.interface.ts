import { FullName } from "@domain/user/value-object/full-name";
import { IReadableUserWithFullName } from "./user-with-full-name.interface";

export interface IWritableUser extends IReadableUserWithFullName {
    fullNameVO: FullName
}