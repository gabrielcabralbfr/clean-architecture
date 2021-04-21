import { User } from '../entities/User'
import { IRepository } from './interfaces/IRepository'
import bcrypt from 'bcrypt'
export class fakeRepository implements IRepository<any> {

    _db: Array<any> = []
    constructor(private collection = 'users') {
    }

    async save(user: any): Promise<any> {
        this.collection === 'users' ? user.password = bcrypt.hashSync(user.password, 10) : null
        this._db.push(user);
        return user
    }

    async findAll(): Promise<any[]> {
        return this._db
    }

    async findByEmail(email: string): Promise<any> {
        const [item] = this._db.filter(user => user.email === email)
        return item
    }

    async findBy(filter: any): Promise<any> {
        const [item] = await this._db.filter(element => {
            return element[Object.keys(filter)[0]] === element[Object.keys(filter)[1]]
        })
        return item
    }

    async login(loginData: any): Promise<any> {
        return this.findByEmail(loginData.email)
    }
}
