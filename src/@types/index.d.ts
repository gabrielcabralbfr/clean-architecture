declare namespace Expresss {
    interface Request {
        t: Function
    }
}

declare global {
    namespace Express {
        interface Request {
            t: Function;
        }
    }
}