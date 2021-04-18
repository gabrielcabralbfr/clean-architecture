import { NextFunction, Request, Response } from 'express'
import { AuthError } from '../errors/Auth/AuthError'
import { ValidationError } from '../errors/ValidationError'

export function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    return res.status(err.statusCode || 500).json({ message: err.message })
}
