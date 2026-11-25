import { IReadablePost } from "../../entities/interfaces/readable-post.interface"

export interface IReadablePostFactory {
    createReadablePost(id: number): Promise<IReadablePost>
}