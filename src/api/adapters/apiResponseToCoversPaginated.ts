import { getPosterPath } from 'utils'
import { CoversApiResponse, CoversPaginated } from 'types'

import { Cover } from 'api/models/Cover'

export const apiResponseToCoversPaginated = (coversFromApi: CoversApiResponse, baseResourcesPath: string): CoversPaginated => {
    const { page, total_pages, results } = coversFromApi

    const covers: Cover[] = results.map(
        result => new Cover(result.id, result.title, result.vote_average, result.vote_count, getPosterPath(baseResourcesPath, result.poster_path))
    )

    return {
        page,
        totalPages: total_pages,
        covers,
    }
}
