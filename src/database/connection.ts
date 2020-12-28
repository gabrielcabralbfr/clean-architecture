import { Collection, MongoClient } from 'mongodb'

export class Connection {
    // public uri: string = 'mongodb://root:rootpassword@localhost:27017'
    public uri: string = process.env.MONGO_URI || 'mongodb://root:rootpassword@localhost:27017'

    public client: MongoClient
    public static instance = new Connection()
    public static getInstance = () => Connection.instance;

    constructor () {
      this.client = new MongoClient(this.uri.toString())
      console.log('a---------------- ', process.env.MONGO_URI)
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
