import { uuid } from 'uuidv4'

export class User {
    public readonly _id!: string
    public name!: string
    public email!: string
    public password!: string

    /**
     *
     */
    constructor (props: Omit<User, '_id'>, id?: string) {
      Object.assign(this, props)

      if (!id) {
        this._id = uuid()
      }
    }
}
