import { NextFunction, Response, Request, Router } from 'express'
import { AuthMiddleware } from './middlewares/auth.middleware'
import { loginController } from './useCases/Auth/Login'
import { createCondoController } from './useCases/Condominium/create-condo'
import { listCondosController } from './useCases/Condominium/list-all-condos'
import { createUserController } from './useCases/User/create-user'
import { listUsersController } from './useCases/User/list-all-users'

const router = Router()

router.get('/', (req: Request, res: Response) => res.json({ healthy: true, message: req.t("greeting") }))
router.post('/login', (req: Request, res: Response, next: NextFunction) => loginController.handle(req, res, next))

router.post('/users', (req: Request, res: Response, next: NextFunction) => createUserController.handle(req, res, next))
router.get('/users', AuthMiddleware, (req: Request, res: Response, next: NextFunction) => listUsersController.handle(req, res, next))


router.post('/condominiums', AuthMiddleware, (req: Request, res: Response, next: NextFunction) => createCondoController.handle(req, res, next))
router.get('/condominiums', AuthMiddleware, (req: Request, res: Response, next: NextFunction) => listCondosController.handle(req, res, next))

export { router }
