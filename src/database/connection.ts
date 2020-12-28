import { Db, MongoClient } from 'mongodb'

export class Connection {
    public uri: string = 'mongodb://root:rootpassword@localhost:27017'
    public client: MongoClient
    public static instance = new Connection()
    public static getInstance = () => Connection.instance;

    constructor () {
      this.client = new MongoClient(this.uri)
      this.connect()
    }

    async connect () {
      await this.client.connect()
    }

    public getDb (dbName: string): Db {
      return this.client.db(dbName)
    }
}
