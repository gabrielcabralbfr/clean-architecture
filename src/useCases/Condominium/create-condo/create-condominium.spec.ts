import { Condo } from "../../../entities/Condo"
import { ValidationError } from "../../../errors/validation.error"
import { fakeRepository } from "../../../repositories/mock.repository"
import { CreateCondominiumUseCase } from "./create-condominium.usecase"

describe("[Condomonium] Test Cases", () => {
    let useCase: any
    let fakeRepo: any
    const fake = {
        "country": "Brazil",
        "latitude": 123,
        "longitude": 123,
        "city": "RJ",
        "address": "Estrada dos Bandeirantes, 69223",
        "address_complement": "proximo ao projac",
        "availabilities": [],
        "condo_manager_id": 1,
        "available_area": "100m2"
    }
    beforeAll(async () => {

        fakeRepo = new fakeRepository('condo')
        useCase = new CreateCondominiumUseCase(fakeRepo)
    })

    afterEach(() => {
        fakeRepo._db = []
    })

    test("It should create a Condo", async () => {
        const condo = await useCase.execute(fake)
        expect(condo).toBeDefined()
        expect(condo).toBeTruthy()
        expect(condo).toBeInstanceOf(Condo)
    })

    test('it should NOT create condominium when ADDRESS is duplicated', async () => {
        await fakeRepo.save(fake)
        expect(async () => {
            await useCase.execute(fake)
        }).rejects.toThrow(ValidationError)
    })

    test('it should NOT create condominium when ADDRESS is omitted', async () => {
        fake.address = ''
        await fakeRepo.save(fake)
        expect(async () => {
            await useCase.execute(fake)
        }).rejects.toThrow(ValidationError)
    })
    test('it should NOT create condominium when condo_manager_id is omitted', async () => {
        fake.condo_manager_id = 0
        await fakeRepo.save(fake)
        expect(async () => {
            await useCase.execute(fake)
        }).rejects.toThrow(ValidationError)
    })
})