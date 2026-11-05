export class FullName {
    public readonly firstName: string
    public readonly lastName?: string

    constructor(firstName: string, lastName?: string) {
        const trimmedFirstName = firstName?.trim()
        const trimmedLastName = lastName?.trim()

        this.validateData(trimmedFirstName, trimmedLastName)

        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`
        }
        return this.firstName
    }

    protected validateData(firstName: string, lastName?: string): void {
        if (!firstName?.length) {
            throw Error('Please provide your first name.')
        }
        if (firstName?.length < 2) {
            throw Error('The first name should contain at least two characters.')
        }
        if (firstName?.length >= 100) {
            throw Error('The first name should contain fewer than 100 characters.')
        }

        if (lastName && lastName.length < 2) {
            throw Error('The last name should contain at least two characters.')
        }
        if (lastName && lastName.length >= 100) {
            throw Error('The last name should contain fewer than 100 characters.')
        }
    }
}