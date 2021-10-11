import { FilmApiResponse } from './FilmApiResponse'

export type CoversApiResponse = {
    page: number
    results: Omit<FilmApiResponse, 'credits'>[]
    total_pages: number
}
