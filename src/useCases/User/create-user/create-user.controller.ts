import { Request, Response } from 'express'
import { CreateUserUseCase } from './create-user.usecase'

export class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private createUserUseCase: CreateUserUseCase) { }

  public async handle (request: Request, response: Response) {
    const { name, email, password } = request.body
    try {
      const user = await this.createUserUseCase.execute({ name, email, password })
      return response.status(201).json({ user })
    } catch (error) {
      return response.status(400).json({ message: error.message || 'Unexpected error' })
    }
  }
}
