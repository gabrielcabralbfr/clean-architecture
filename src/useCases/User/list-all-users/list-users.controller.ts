import { Request, Response } from 'express'
import { ListUsersUseCase } from './list-users.usecase'

export class ListUsersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listUsersUseCase: ListUsersUseCase) {}

  async handle (req: Request, res: Response) {
    try {
      const users = await this.listUsersUseCase.execute()
      return res.status(200).json({ users })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message || 'An error occurred.' })
    }
  }
}
