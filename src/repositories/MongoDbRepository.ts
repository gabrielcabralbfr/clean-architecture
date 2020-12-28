import { User } from '../entities/User'
import { IRepository } from './interfaces/IRepository'
import { MongoClient, Collection, Db } from 'mongodb'

export class MongoDbRepository implements IRepository<User> {
  public uri: string = 'mongodb://root:rootpassword@localhost:27017'
  public client: MongoClient
  private _collection!: Collection
  private _db!: Db

  // eslint-disable-next-line no-useless-constructor
  constructor (private collectionName: string) {
    this.client = new MongoClient(this.uri)
    this.connect()
  }

  async connect () {
    await this.client.connect()
    this._db = this.client.db('myCondo')
    this._collection = this._db.collection(this.collectionName)
  }

  async save (user: User): Promise<any> {
    return await this._collection.insertOne(user)
  }

  async findAll (): Promise<any> {
    return await this._collection.find({}).toArray()
  }

  async findByEmail (email: string): Promise<User> {
    const users = await this.findAll()
    const [user] = users.filter((user: User) => user.email === email)
    return user
  }
}
