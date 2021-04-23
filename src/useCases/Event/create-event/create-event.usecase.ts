import { ValidationError } from '../../../errors/validation.error'
import { IRepository } from '../../../repositories/interfaces/IRepository'
import { Condo } from '../../../entities/Condo'
import { Event } from '../../../entities/Event'

export class CreateEventUseCase {
  constructor(private repository: IRepository<Event>) {
  }

  async execute(data: Omit<Event, '_id'>): Promise<Event> {
    if (!(await this.validate(data))) throw new ValidationError({ message: "error.validation", statusCode: 400 })

    const event = new Event(data)
    return this.repository.save(event)
  }

  async validate(event: Omit<Event, '_id'>): Promise<boolean> {
    if (!event.event_datetime || !event.event_maker_user_id || !event.condo_id ) return false
    // if (await this.repository.findBy({'event_maker_user_id':  condo.event_maker_user_id})) return false
    return true
  }
}
