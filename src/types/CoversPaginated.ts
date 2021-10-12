import { Cover } from 'api/models/Cover'

export type CoversPaginated = {
    covers: Cover[]
    page: number
    totalPages: number
}
