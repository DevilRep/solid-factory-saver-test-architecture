import { EditableUserRawDataDto } from "./editable-user-raw-data.dto"

export class EditableUserWithFullNameDataDto {
    firstName: string
    lastName: string
    phone?: string

    constructor({
        firstName, lastName, name, phone
    }: EditableUserRawDataDto) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''

        if (phone) {
            this.phone = phone
        }

        if (!name || this.firstName || this.lastName) {
            return
        }

        const [firstNameFromName, lastNameFromName] = name.split(' ')

        this.firstName = firstNameFromName
        this.lastName = lastNameFromName
    }
}