import { v4 as uuidv4 } from 'uuid';
export class User {
  public readonly _id!: string
  public name: string
  public email: string
  public email_verified: boolean = false
  public phone: string
  public phone_verified: boolean = false
  public password: string
  public is_event_maker: boolean = false

  /**
   *
   */
  constructor(props: Omit<User, '_id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this._id = uuidv4();
    }

  }
}
