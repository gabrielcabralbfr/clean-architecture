import { v4 as uuidv4 } from 'uuid';


export class Event {
    public readonly _id: string
    public event_maker_user_id: number
    public condo_id: number
    public event_datetime: Date
    public expectedAttendees: number
    public event_category: string
    /**
     *
     */
    constructor(props: Omit<Event, '_id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this._id = uuidv4()
        }
    }
}