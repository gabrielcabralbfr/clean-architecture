/* eslint-disable no-useless-constructor */
import { User } from '../../../entities/User'
import { IRepository } from '../../../repositories/interfaces/IRepository'

export class CreateUserUseCase {
  constructor (private repository: IRepository<User>) {
  }

  async execute (data: Omit<User, '_id'>): Promise<User> {
    await this.validate(data)

    const user = new User(data)
    return this.repository.save(user)
  }

  async validate (user: Omit<User, '_id'>) {
    const alreadyExists = await this.repository.findByEmail(user.email)

    if (alreadyExists) throw new Error('User already exists')
  }
}
