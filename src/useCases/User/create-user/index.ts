import { MongoDbRepository } from '../../../repositories/mongodb.repository'
import { CreateUserController } from './create-user.controller'
import { CreateUserUseCase } from './create-user.usecase'

const mongoDbProvider = new MongoDbRepository('users')
const createUserUseCase = new CreateUserUseCase(mongoDbProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
