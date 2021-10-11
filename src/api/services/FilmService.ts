import { ApiService } from './ApiService'

import { ConfigurationApiResponse, CoversPaginated } from 'types'

import { Film } from 'api/models/Film'
import { ApiError } from 'api/models/ApiError'
import { apiResponseToFilm } from 'api/adapters/apiResponseToFilm'
import { apiResponseToCoversPaginated } from 'api/adapters/apiResponseToCoversPaginated'

class FilmService {
    public baseResourcesPath: string = `${process.env.REACT_APP_TMDB_RESOURCE_URL}`

    constructor() {
        this.initFilmService()
    }

    initFilmService = async () => {
        const config: ConfigurationApiResponse = await this.getConfig()
        this.baseResourcesPath = config.images.base_url
    }

    getConfig = async (): Promise<ConfigurationApiResponse> => {
        const resource = '/configuration'
        try {
            const response = await ApiService.get(resource)
            return response.data
        } catch (error: any) {
            throw new ApiError(error)
        }
    }

    getCovers = async (page: number = 1): Promise<CoversPaginated> => {
        const resource = `/discover/movie`
        const params = {
            page,
            sort_by: 'popularity.desc',
        }
        try {
            const response = await ApiService.get(resource, params)
            return apiResponseToCoversPaginated(response.data, this.baseResourcesPath)
        } catch (error: any) {
            throw new ApiError(error)
        }
    }

    getFilm = async (id: number): Promise<Film> => {
        const resource = `/movie/${id}`
        const params = { append_to_response: 'credits' }
        try {
            const response = await ApiService.get(resource, params)
            return apiResponseToFilm(response.data, this.baseResourcesPath)
        } catch (error: any) {
            throw new ApiError(error)
        }
    }
}

export default new FilmService()
