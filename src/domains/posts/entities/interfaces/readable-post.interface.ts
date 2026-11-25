import { Title } from "../../value-object/title"
import { IOwner } from "./onwer.interface"

export interface IReadablePost {
    readonly id: number
    readonly title: Title
    readonly description: string
    readonly owner: IOwner
}