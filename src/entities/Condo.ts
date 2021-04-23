import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

interface Availability {
    opening_days: string
    opening_hours: string  
}

export class Condo {
    public readonly _id: string
    public country: string
    public latitude: number
    public longitude: number
    public city: string
    public address: string
    public address_complement: string
    public availabilities: Array<Availability>
    public condo_manager_id: number
    public available_area: string
    public reference: string
    /**
     *
     */
    constructor(props: Omit<Condo, '_id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this._id = uuidv4()
        }
    }
}