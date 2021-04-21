import { NextFunction, Response, Request, Router } from 'express'
import { AuthMiddleware } from './middlewares/auth.middleware'
import { loginController } from './useCases/Auth/Login'
import { createUserController } from './useCases/User/create-user'
import { listUsersController } from './useCases/User/list-all-users'

const router = Router()

router.get('/', (req: Request, res: Response) => res.json({ healthy: true, message: req.t("greeting") }))
router.post('/users', (req: Request, res: Response, next: NextFunction) => createUserController.handle(req, res, next))
router.get('/users', AuthMiddleware, (req: Request, res: Response, next: NextFunction) => listUsersController.handle(req, res, next))
router.post('/login', (req: Request, res: Response, next: NextFunction) => loginController.handle(req, res, next))

export { router }
