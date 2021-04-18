import { NextFunction, Request, Response } from 'express'
import { ListUsersUseCase } from './list-users.usecase'

export class ListUsersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private listUsersUseCase: ListUsersUseCase) {}

  async handle (req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.listUsersUseCase.execute()
      return res.status(200).json({ users })
    } catch (error) {
      next(error)
    }
  }
}
