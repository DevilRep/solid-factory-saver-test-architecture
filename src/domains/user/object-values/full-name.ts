export class FullName {
    public readonly firstName: string
    public readonly lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`
        } else if (this.firstName) {
            return this.firstName
        } else if (this.lastName) {
            return this.lastName
        }
        return ''
    }
}