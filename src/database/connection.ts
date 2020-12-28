import { Collection, MongoClient } from 'mongodb'
import { config as dotenv } from 'dotenv'

dotenv()
export class Connection {
    // public uri: string = 'mongodb+srv://admin:admin@cluster0.m6uhf.mongodb.net/myCondo?retryWrites=true&w=majority'
    public uri: string = process.env.MONGO_URL || 'mongodb://localhost:27017'
    public client: MongoClient
    public static instance = new Connection()
    public static getInstance = () => Connection.instance;

    constructor () {
      this.client = new MongoClient(this.uri)
    }

    async connect () {
      await this.client.connect()
    }

    public getCollection (dbName: string, collectionName: string): Collection {
      return this.client.db(dbName).collection(collectionName)
    }

    public async getClient (): Promise<MongoClient> {
      await this.connect()
      return this.client
    }
}
