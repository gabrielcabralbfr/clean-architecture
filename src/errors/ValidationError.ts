export class ValidationError extends Error {
    statusCode: any;
    /**
     *
     */
    constructor({message, statusCode}) {
        super(message);
        this.statusCode = statusCode
    }
}