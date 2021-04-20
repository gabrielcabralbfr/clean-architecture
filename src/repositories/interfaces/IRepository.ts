
export interface IRepository<T> {
    save(item: T): Promise<T>
    findAll(): Promise<Array<T>>
    findByEmail(email: string): Promise<any>
    login(data: T | Partial<T>): Promise<T>
}
