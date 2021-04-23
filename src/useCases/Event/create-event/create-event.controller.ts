import { NextFunction, Request, Response } from 'express'
import { CreateEventUseCase } from './create-event.usecase'

export class CreateEventController {
  constructor(private createEvemtUseCase: CreateEventUseCase) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    const data = request.body
    try {
      const condo = await this.createEvemtUseCase.execute(data)
      return response.status(201).json({ condo })
    } catch (error) {
      next(error)
    }
  }
}
