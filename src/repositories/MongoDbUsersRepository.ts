import { User } from '../entities/User'
import { IUserRepository } from './IUserRepository'
import { MongoClient } from 'mongodb'

export class MongoDbUsersRepository implements IUserRepository {
  private uri: string = 'mongodb://root:rootpassword@localhost:27017'
  public client: MongoClient

  // eslint-disable-next-line no-useless-constructor
  constructor () {
    this.client = new MongoClient(this.uri)
    this.connect()
  }

  async connect () {
    await this.client.connect()
  }

  async save (user: User): Promise<any> {
    const db = this.client.db('myCondo')
    const collection = db.collection('users')
    return await collection.insertOne(user)
  }

  async findAll (): Promise<any> {
    const db = this.client.db('myCondo')
    const collection = db.collection('users')
    return collection.find({}).toArray()
  }

  async findByEmail (email: string): Promise<User> {
    const users = await this.findAll()
    return users.filter((user: User) => user.email === email).pop()
  }
}
