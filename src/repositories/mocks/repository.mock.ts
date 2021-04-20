import { User } from '../../entities/User'
import { IRepository } from '../interfaces/IRepository'
import bcrypt from 'bcrypt'

export class fakeRepository implements IRepository<any> {

    _db: Array<any> = []
    constructor() {
    }


    async save(user: User): Promise<any> {
        user.password = bcrypt.hashSync(user.password, 10);
        this._db.push(user);
        return user
    }

    async findAll(): Promise<User[]> {
        return this._db
    }

    async findByEmail(email: string): Promise<any> {
        return this._db.filter(user => user.email === email)
    }

    async login(loginData: User): Promise<User> {
        return this.findByEmail(loginData.email)
    }
}
