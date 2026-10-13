export class Email {
    readonly value: string;

    constructor(value: string) {
        if (!value.includes('@')) {
            throw new Error('Please provide a valid email address.')
        }
        this.value = value;
    }
}