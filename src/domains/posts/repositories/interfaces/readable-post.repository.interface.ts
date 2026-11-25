export interface IReadablePostRawData {
    readonly title: string
    readonly description: string
    readonly ownerId: number
}

export interface IReadablePostRepository {
    getPostById(id: number): Promise<IReadablePostRawData>
}