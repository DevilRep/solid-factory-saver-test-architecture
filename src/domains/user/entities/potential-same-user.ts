import { Email } from "../value-object/email";
import { IPotentialSameUser } from "./interfaces/potential-same-user.interface"

export class PotentialSameUser implements IPotentialSameUser {
    constructor(
        public readonly id: number,
        public readonly email: Email
    ) { }
}