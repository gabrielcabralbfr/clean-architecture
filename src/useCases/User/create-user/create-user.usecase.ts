/* eslint-disable no-useless-constructor */
import { User } from '../../../entities/User'
import { ValidationError } from '../../../errors/validation.error'
import { IRepository } from '../../../repositories/interfaces/IRepository'

export class CreateUserUseCase {
  constructor(private repository: IRepository<User>) {
  }

  async execute(data: Omit<User, '_id'>): Promise<User> {
    if (!(await this.validate(data))) throw new ValidationError({ message: "error.validation", statusCode: 400 })

    const user = new User(data)
    return this.repository.save(user)
  }

  async validate(user: Omit<User, '_id'>): Promise<boolean> {
    const alreadyExists = await this.repository.findByEmail(user.email)
    if (alreadyExists != null) return false
    if (Array.isArray(alreadyExists) && alreadyExists.length > 0) return false

    if (!user.email || !user.name || !user.password) return false
    return true
  }
}
