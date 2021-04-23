import { MongoDbRepository } from '../../../repositories/mongodb.repository'
import { CreateEventController } from './create-event.controller'
import { CreateEventUseCase } from './create-event.usecase'

const mongoDbProvider = new MongoDbRepository('condominiums')
const createEventUseCase = new CreateEventUseCase(mongoDbProvider)

const createEventController = new CreateEventController(createEventUseCase)

export { createEventController }
