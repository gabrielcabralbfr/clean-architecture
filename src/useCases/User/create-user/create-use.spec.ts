import { ValidationError } from "../../../errors/ValidationError"
import { fakeRepository } from "../../../repositories/mocks/repository.mock"
import { CreateUserUseCase } from "./create-user.usecase"

test('it should create user', async () => {
    const fake = {
        email: "test@test",
        name: "name",
        password: "pass123",
        _id: ''
    }
    const fakeRepo = new fakeRepository()
    const useCase = new CreateUserUseCase(fakeRepo)
    const user = await useCase.execute(fake)
    expect(user).toBeDefined()
    fake._id = user._id
    expect(user).toEqual(fake)
})

test('it should NOT create user', async () => {
    const fake = {
        email: "test@test",
        name: "name",
        password: "pass123",
        _id: ''
    }
    const fakeRepo = new fakeRepository()
    await fakeRepo.save(fake)
    const useCase = new CreateUserUseCase(fakeRepo)

    expect(async () => {
        await useCase.execute(fake)
    }).rejects.toThrow(ValidationError)
})