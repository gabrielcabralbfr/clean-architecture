export class ValidationError extends Error {
    statusCode: any;
    /**
     *
     */
    constructor({ message, statusCode }: any) {
        super(message);
        this.statusCode = statusCode
    }
}