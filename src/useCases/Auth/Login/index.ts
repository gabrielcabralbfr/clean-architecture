import { MongoDbRepository } from '../../../repositories/mongodb.repository'
import { LoginController } from './login.controller'
import { LoginUseCase } from './login.usecase'

const repo = new MongoDbRepository('users')

const useCase = new LoginUseCase(repo)

const loginController = new LoginController(useCase)

export { loginController }
