import { User } from "../../../entities/User"
import { ValidationError } from "../../../errors/ValidationError"
import { fakeRepository } from "../../../repositories/mocks/repository.mock"
import { CreateUserUseCase } from "./create-user.usecase"

describe('[USER] usecases Tests', () => {
    let useCase: any
    let fakeRepo: any
    const fake = {
        email: "test@test",
        name: "name",
        password: "pass123",
        _id: ''
    }
    const fakeWithoutEmail = {
        email: '',
        name: "name",
        password: "pass123",
        _id: ''
    }
    const fakeWithoutPassword = {
        email: "test@test",
        name: "name",
        password: '',
        _id: ''
    }
    beforeAll(async () => {

        fakeRepo = new fakeRepository()
        useCase = new CreateUserUseCase(fakeRepo)
    })

    afterEach(() => {
        fakeRepo._db = []
    })


    test('it should create user when valid data provided', async () => {
        const user = await useCase.execute(fake)
        expect(user).toBeDefined()
        expect(user).toBeTruthy()
        expect(user).toBeInstanceOf(User)
    })

    test('it should NOT create user when EMAIL is duplicated', async () => {
        await fakeRepo.save(fake)
        expect(async () => {
            await useCase.execute(fake)
        }).rejects.toThrow(ValidationError)
    })

    test('it should NOT create user when PARAMETER is empty', async () => {
        expect(async () => {
            await useCase.execute(fakeWithoutEmail)
        }).rejects.toThrow(ValidationError)
        expect(async () => {
            await useCase.execute(fakeWithoutPassword)
        }).rejects.toThrow(ValidationError)

    })
})