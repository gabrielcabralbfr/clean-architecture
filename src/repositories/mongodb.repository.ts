import { User } from '../entities/User'
import { IRepository } from './interfaces/IRepository'
import { MongoClient, Collection, Db, InsertOneWriteOpResult } from 'mongodb'
import { Connection } from '../database/connection'
import bcrypt from 'bcrypt'

export class MongoDbRepository implements IRepository<any> {
  public uri: string = 'mongodb://root:rootpassword@localhost:27017'
  public client!: MongoClient
  private _collection!: Collection
  private _db!: Db

  constructor(private collectionName: string) {
    this.connect()
  }

  async connect() {
    this.client = await Connection.getInstance().getClient()
    this._db = this.client.db('myCondo')

    this._collection = this._db.collection(this.collectionName)
  }

  async save(item: any): Promise<any> {
    this.collectionName === 'users' ? item.password = bcrypt.hashSync(item.password, 10) : null
    const { ops }: InsertOneWriteOpResult<any> = await this._collection.insertOne(item)
    const [createdItem] = ops
    createdItem.password ? delete createdItem.password : null
    return createdItem
  }

  async findAll(): Promise<any[]> {
    return await this._collection.find().project({ password: 0 }).toArray()
  }

  async findByEmail(email: string): Promise<any> {
    const [item] = await this._collection.find({ email: email }).toArray()
    return item
  }

  async findBy(filter: any): Promise<any> {
    const [item] = await this._collection.find(filter).toArray()
    return item
  }

  async login(loginData: any): Promise<any> {
    const item = await this.findByEmail(loginData.email)
    return item
  }
}
