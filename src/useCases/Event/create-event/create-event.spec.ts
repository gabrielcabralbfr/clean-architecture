import { Condo } from "../../../entities/Condo"
import { Event } from "../../../entities/Event"
import { ValidationError } from "../../../errors/validation.error"
import { fakeRepository } from "../../../repositories/mock.repository"
import { CreateEventUseCase } from "./create-event.usecase"

describe("[Condomonium] Test Cases", () => {
    let useCase: any
    let fakeRepo: any
    const fake = {
        "event_maker_user_id": 1,
        "condo_id": 1,
        "event_datetime": "2020-10-10",
        "expectedAttendees": 0,
        "event_category": "food"
    }
    beforeAll(async () => {

        fakeRepo = new fakeRepository('condo')
        useCase = new CreateEventUseCase(fakeRepo)
    })

    afterEach(() => {
        fakeRepo._db = []
    })

    test("It should create a Event", async () => {
        const event = await useCase.execute(fake)
        expect(event).toBeDefined()
        expect(event).toBeTruthy()
        expect(event).toBeInstanceOf(Event)
    })

    test("It should not create a Event when condo_id and event_maker_user_id not provided", async () => {
        fake.condo_id = 0
        fake.event_maker_user_id = 0
        expect(async () => {
            await useCase.execute(fake)
        }).rejects.toThrow(ValidationError)
    })

})