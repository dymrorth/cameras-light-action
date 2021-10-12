import { getPosterPath } from 'utils'
import { FilmApiResponse } from 'types'

import { Film } from 'api/models/Film'

export const apiResponseToFilm = (filmFromApi: FilmApiResponse, baseResourcesPath: string): Film => {
    const { id, title, poster_path, credits, vote_average, vote_count, overview } = filmFromApi
    return new Film(id, title, getPosterPath(baseResourcesPath, poster_path), vote_average, vote_count, overview, credits)
}
