import { NextFunction, Request, Response } from 'express'
import { Auth } from '../entities/Auth'

export function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
  const unauthorized = (message: string) => res.status(401).json({
    status: 401,
    message: message
  })

  // verificar se token está no header da requisicao
  if (!req.headers.authorization) {
    return unauthorized('need to authenticate, dummy')
  }

  // validar token
  try {
    const token = req.headers.authorization.split(' ')[1]
    Auth.getInstance().validateToken(token)
  } catch (error) {
    return unauthorized(error.message)
  }

  return next()
}
