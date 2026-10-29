import { hash, compare } from 'bcrypt'

export class Password {
    protected constructor(
        public readonly hashedValue: string,
        protected readonly rawValue?: string
    ) { }

    static async fromString(password: string): Promise<Password> {
        const hashedPassword = await hash(password, process.env.PASSWORD_HASH_ROUNDS || 10)

        return new Password(hashedPassword, password)
    }

    static async fromHashedString(hashedString: string): Promise<Password> {
        return new Password(hashedString)
    }

    async isEqual(password: Password): Promise<boolean> {
        if (this.rawValue) {
            return compare(this.rawValue, password.hashedValue)
        }
        if (password.rawValue) {
            return compare(password.rawValue, this.hashedValue)
        }
        return false
    }
}