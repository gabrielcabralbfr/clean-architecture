export class AuthError extends Error {
  statusCode: any;
  constructor({ message, name, statusCode }: any) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, AuthError);
  }
}