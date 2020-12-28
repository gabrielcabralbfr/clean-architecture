import { MongoDbUsersRepository } from '../../../repositories/MongoDbUsersRepository'
import { CreateUserController } from './create-user.controller'
import { CreateUserUseCase } from './create-user.usecase'

const mongoDbProvider = new MongoDbUsersRepository()
const createUserUseCase = new CreateUserUseCase(mongoDbProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
