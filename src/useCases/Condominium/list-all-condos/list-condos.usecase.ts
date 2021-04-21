import { Condo } from '../../../entities/Condo'
import { IRepository } from '../../../repositories/interfaces/IRepository'

export class ListCondosUseCase {
// eslint-disable-next-line no-useless-constructor
  constructor (private repository: IRepository<Condo>) { }

  async execute (): Promise<Condo[]> {
    return await this.repository.findAll()
  }
}
