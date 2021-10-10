import { ApiService } from './ApiService'

import { Film } from '../models/Film'

import { FilmApiResponse } from 'types'

class FilmService {
    private apiFilmAdapter = (filmFromApi: FilmApiResponse): Film => {
        const { id, title, image, director, cast, rating, synopsis } = filmFromApi
        return new Film(id, title, image, director, cast, rating, synopsis)
    }

    getList = async (): Promise<Film> => {
        const resource = '/films'
        try {
            const res = await ApiService.get(resource)
            return this.apiFilmAdapter(res.data)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new FilmService()
