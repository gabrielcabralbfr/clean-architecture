import { User } from '../../../entities/User'
import { IRepository } from '../../../repositories/interfaces/IRepository'

export class LoginUseCase {
// eslint-disable-next-line no-useless-constructor
  constructor (private repository: IRepository<User>) { }

  async execute (data: Partial<User>): Promise<User | null> {
    return await this.repository.login(data)
  }
}
