import { MongoDbRepository } from '../../../repositories/mongodb.repository'
import { ListCondosController } from './list-condos.controller'
import { ListCondosUseCase } from './list-condos.usecase'

const mongoDbRepository = new MongoDbRepository('condominiums')

const listCondosUseCase = new ListCondosUseCase(mongoDbRepository)

const listCondosController = new ListCondosController(listCondosUseCase)

export { listCondosController }
