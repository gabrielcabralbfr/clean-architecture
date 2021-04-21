import { AuthError } from "../../../errors/auth.error"
import { fakeRepository } from "../../../repositories/mock.repository"
import { LoginUseCase } from "./login.usecase"

describe("[LOGIN] usecase tests", () => {
    let useCase: any
    let fakeRepo: any
    const fake = {
        email: "test@test",
        name: "name",
        password: "pass123",
        _id: ''
    }
    beforeAll(async () => {

        fakeRepo = new fakeRepository()
        useCase = new LoginUseCase(fakeRepo)
    })

    afterEach(() => {
        fakeRepo._db = []
    })


    test('it should return a token when CORRECT credentials provided', async () => {
        await fakeRepo.save(fake)
        const token = await useCase.execute({
            email: "test@test",
            name: "name",
            password: "pass123",
            _id: ''
        })
        expect(token).toBeDefined()
        expect(token).toBeTruthy()
    })

    test('it should return NOT a token when INCORRECT credentials provided', async () => {
        await fakeRepo.save(fake)

        expect(async () => {
            await useCase.execute({
                email: "test@test",
                name: "name",
                password: "wrong",
                _id: ''
            })
        }).rejects.toThrow(`error.auth.credentials`)

        expect(async () => {
            await useCase.execute({
                email: "wroong@test",
                name: "name",
                password: "wrong",
                _id: ''
            })
        }).rejects.toThrow(`error.user.notfound`)
    })
})