/* eslint-disable no-useless-constructor */
import { User } from '../../../entities/User'
import { IUserRepository } from '../../../repositories/IUserRepository'

export class CreateUserUseCase {
  constructor (private repository: IUserRepository) {
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
