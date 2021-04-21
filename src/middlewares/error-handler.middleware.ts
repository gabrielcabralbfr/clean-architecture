import { NextFunction, Request, Response } from 'express'

export function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    return res.status(err.statusCode || 500).json({ message: req.t(err.message), status: err.statusCode || 500 })
}
