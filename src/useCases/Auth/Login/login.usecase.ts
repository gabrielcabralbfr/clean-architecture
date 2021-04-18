import { User } from '../../../entities/User'
import { IRepository } from '../../../repositories/interfaces/IRepository'
import { Auth } from '../../../entities/Auth'
import bcrypt from 'bcrypt'
import { AuthError } from '../../../errors/Auth/AuthError'
import { NextFunction } from 'express'

export class LoginUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private repository: IRepository<User>) { }

  async execute(data: Partial<User>): Promise<string> {

    const user: User = await this.repository.login(data)
    if (!user) throw new AuthError({ message: "error.user.notfound", statusCode: 401 })

    const correctPassword = bcrypt.compareSync(data.password, user.password);
    if (!correctPassword) throw new AuthError({ message: "error.auth.credentials", statusCode: 401 })

    const token = Auth.generateToken(user)
    return token
  }
}
