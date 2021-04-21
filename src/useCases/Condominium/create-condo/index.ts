import { MongoDbRepository } from '../../../repositories/mongodb.repository'
import { CreateCondominiumController } from './create-condominium.controller'
import { CreateCondominiumUseCase } from './create-condominium.usecase'

const mongoDbProvider = new MongoDbRepository('condominiums')
const createCondoUseCase = new CreateCondominiumUseCase(mongoDbProvider)

const createCondoController = new CreateCondominiumController(createCondoUseCase)

export { createCondoController }
