import { Request, Response } from 'express'
import { Auth } from '../../../entities/Auth'
import { LoginUseCase } from './login.usecase'

export class LoginController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private loginUseCase: LoginUseCase) {}

  async handle (req: Request, res: Response) {
    const data = req.body
    try {
      const user = await this.loginUseCase.execute(data)
      if (!user) res.status(401).json({ message: 'user or password incorrect' })
      const token = Auth.generateToken(user)
      return res.status(200).json({ token })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message || 'Auth failed' })
    }
  }
}
