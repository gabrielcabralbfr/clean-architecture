import { MongoDbRepository } from '../../../repositories/MongoDbRepository'
import { ListUsersController } from './list-users.controller'
import { ListUsersUseCase } from './list-users.usecase'

const mongoDbRepository = new MongoDbRepository('users')

const listUsersUseCase = new ListUsersUseCase(mongoDbRepository)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }
