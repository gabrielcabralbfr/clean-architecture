import { User } from '../../../entities/User'
import { IRepository } from '../../../repositories/interfaces/IRepository'

export class ListUsersUseCase {
// eslint-disable-next-line no-useless-constructor
  constructor (private repository: IRepository<User>) { }

  async execute (): Promise<User[]> {
    return await this.repository.findAll()
  }
}
