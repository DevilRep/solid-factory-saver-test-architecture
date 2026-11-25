import { ISignUpUserSaver } from "../savers/interfaces/sign-up-user.saver.interface"
import { Email } from "../value-object/email"
import { FullName } from "../value-object/full-name"
import { Password } from "../value-object/password"
import { IPotentialSameUser } from "./interfaces/potential-same-user.interface"
import { IUnregisteredUser } from "./interfaces/unregistered-user.interface"
import { IReadableUserWithFullName } from "./interfaces/user-with-full-name.interface"
import { User } from "./user.entity"

export class UnregisteredUser implements IUnregisteredUser {
    constructor(
        public readonly email: Email,
        public readonly fullName: FullName,
        protected readonly saver: ISignUpUserSaver,
        readonly potentialSameUser?: IPotentialSameUser,
    ) {
        if (!potentialSameUser) {
            return
        }

        if (this.userAlreadyExist(potentialSameUser)) {
            throw new Error('User already exists!')
        }
    }

    protected userAlreadyExist(potentialSameUser: IPotentialSameUser): boolean {
        return potentialSameUser.email.value === this.email.value
    }

    async signUp(password: string): Promise<IReadableUserWithFullName> {
        const userPassword = await Password.fromString(password)

        // potentially this part can be used to get the real data from storage, especially useful for default values
        const { id, email, firstName, lastName } = await this.saver.createNewUser({
            firstName: this.fullName.firstName,
            lastName: this.fullName.lastName || '',
            email: this.email.value,
            password: userPassword.hashedValue
        })

        return new User({
            id,
            emailVO: new Email(email),
            fullNameVO: new FullName(firstName, lastName)
        })
    }
}