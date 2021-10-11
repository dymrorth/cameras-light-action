import { CustomError } from './CustomError'

export class ApiError extends CustomError {
    constructor({ message, code }: { message: string; code: number }) {
        super(message, code)
    }
}
