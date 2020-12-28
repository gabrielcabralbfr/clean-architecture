import { Router } from 'express'
import { createUserController } from './useCases/User/create-user'
import { listUsersController } from './useCases/User/list-all-users'

const router = Router()

router.get('/', (req, res) => res.json({ healthy: true }))
router.post('/users', (req, res) => createUserController.handle(req, res))
router.get('/users', (req, res) => listUsersController.handle(req, res))

export { router }
