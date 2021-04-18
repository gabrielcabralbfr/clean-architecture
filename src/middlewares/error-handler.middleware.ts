import { NextFunction, Request, Response } from 'express'
import { AuthError } from '../errors/Auth/AuthError'
import { ValidationError } from '../errors/ValidationError'

export function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AuthError || err instanceof ValidationError)
        return res.status(err.statusCode).json({ message: req.t(err.message) })
    return res.status(500).json({ message: req.t('err.general') })
}
