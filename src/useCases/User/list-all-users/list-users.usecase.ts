import { User } from '../../../entities/User'
import { IUserRepository } from '../../../repositories/IUserRepository'

export class ListUsersUseCase {
// eslint-disable-next-line no-useless-constructor
  constructor (private repository: IUserRepository) { }

  async execute (): Promise<User[]> {
    return await this.repository.findAll()
  }
}
