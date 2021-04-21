import { ValidationError } from '../../../errors/validation.error'
import { IRepository } from '../../../repositories/interfaces/IRepository'
import { Condo } from '../../../entities/Condo'

export class CreateCondominiumUseCase {
  constructor(private repository: IRepository<Condo>) {
  }

  async execute(data: Omit<Condo, '_id'>): Promise<Condo> {
    if (!(await this.validate(data))) throw new ValidationError({ message: "error.validation", statusCode: 400 })

    const condo = new Condo(data)
    return this.repository.save(condo)
  }

  async validate(condo: Omit<Condo, '_id'>): Promise<boolean> {
    if (!condo.address || !condo.condo_manager_id) return false
    if (await this.repository.findBy({'address':  condo.address})) return false
    return true
  }
}
