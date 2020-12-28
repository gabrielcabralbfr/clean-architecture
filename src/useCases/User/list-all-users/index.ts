import { MongoDbUsersRepository } from '../../../repositories/MongoDbUsersRepository'
import { ListUsersController } from './list-users.controller'
import { ListUsersUseCase } from './list-users.usecase'

const mongoDbRepository = new MongoDbUsersRepository()

const listUsersUseCase = new ListUsersUseCase(mongoDbRepository)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }
