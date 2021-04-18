import { NextFunction, Request, Response } from 'express'
import { LoginUseCase } from './login.usecase'

export class LoginController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private loginUseCase: LoginUseCase) { }

  async handle(req: Request, res: Response, next: NextFunction) {

    const data = req.body
    try {
      const token = await this.loginUseCase.execute(data)
      return res.status(200).json({ token })
    } catch (error) {
      next(error)
    }
  }
}
