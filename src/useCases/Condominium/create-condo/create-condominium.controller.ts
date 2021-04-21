import { NextFunction, Request, Response } from 'express'
import { CreateCondominiumUseCase } from './create-condominium.usecase'

export class CreateCondominiumController {
  constructor(private createCondoUseCase: CreateCondominiumUseCase) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    const data = request.body
    try {
      const condo = await this.createCondoUseCase.execute(data)
      return response.status(201).json({ condo })
    } catch (error) {
      next(error)
    }
  }
}
