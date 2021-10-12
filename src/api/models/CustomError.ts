export class CustomError extends Error {
    name: string

    constructor(message: string, public code: number) {
        super(message)
        this.name = this.constructor.name
    }
}
