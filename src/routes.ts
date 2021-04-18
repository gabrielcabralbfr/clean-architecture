import { Response } from 'express'
import { Request } from 'express'
import { Router } from 'express'
import { AuthMiddleware } from './middlewares/auth.middleware'
import { loginController } from './useCases/Auth/Login'
import { createUserController } from './useCases/User/create-user'
import { listUsersController } from './useCases/User/list-all-users'

const router = Router()

router.get('/', (req: Request, res: Response) => res.json({ healthy: true }))
router.post('/users', AuthMiddleware, (req: Request, res: Response) => createUserController.handle(req, res))
router.get('/users', AuthMiddleware, (req: Request, res: Response) => listUsersController.handle(req, res))
router.post('/login', (req: Request, res: Response) => loginController.handle(req, res))

export { router }
