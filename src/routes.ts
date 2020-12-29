import { Router } from 'express'
import { AuthMiddleware } from './middlewares/auth.middleware'
import { loginController } from './useCases/Auth/Login'
import { createUserController } from './useCases/User/create-user'
import { listUsersController } from './useCases/User/list-all-users'

const router = Router()

router.get('/', (req, res) => res.json({ healthy: true }))
router.post('/users', AuthMiddleware, (req, res) => createUserController.handle(req, res))
router.get('/users', AuthMiddleware, (req, res) => listUsersController.handle(req, res))
router.post('/login', (req, res) => loginController.handle(req, res))

export { router }
