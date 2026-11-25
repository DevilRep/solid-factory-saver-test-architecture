export class Title {
    static MAX_TITLE_LENGTH = 50

    readonly value: string

    constructor(title: string) {
        this.value = title.trim()

        if (this.value.length > Title.MAX_TITLE_LENGTH) {
            throw new Error('The title is too long!')
        }
    }
}