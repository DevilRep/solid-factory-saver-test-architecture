import { FullName } from "@domain/user/object-values/full-name";
import { IReadableUserWithFullName } from "./user-with-full-name.interface";

export interface IWritableUser extends IReadableUserWithFullName {
    fullNameVO: FullName
}