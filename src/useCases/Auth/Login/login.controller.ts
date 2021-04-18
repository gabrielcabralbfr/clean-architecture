import { Request, Response } from 'express'
import { Auth } from '../../../entities/Auth'
import { User } from '../../../entities/User'
import { LoginUseCase } from './login.usecase'
import bcrypt from 'bcrypt'

export class LoginController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private loginUseCase: LoginUseCase) { }

  async handle(req: Request, res: Response) {
    const data = req.body
    try {
      const user: User = await this.loginUseCase.execute(data)

      if (!user) return res.status(401).json({ message: req.t("error.user.notfound") })

      const correctPassword = bcrypt.compareSync(data.password, user.password);

      if (!correctPassword) return res.status(401).json({ message: req.t("error.auth.credentials") })


      const token = Auth.generateToken(user)
      return res.status(200).json({ token })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message || 'Auth failed' })
    }
  }
}
