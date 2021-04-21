import { NextFunction, Request, Response } from 'express'
import { ListCondosUseCase } from './list-condos.usecase'

export class ListCondosController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private listCondosUseCase: ListCondosUseCase) { }

  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const condos = await this.listCondosUseCase.execute()
      return res.status(200).json({ condos })
    } catch (error) {
      next(error)
    }
  }
}
