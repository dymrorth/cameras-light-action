import React, { useEffect } from 'react'

import { Film } from 'api/models/Film'

import { useAppSelector, useThunkDispatch, useRestoreScroll } from 'hooks'
import { fetchFilm } from 'store/film/filmActions'

import { FilmPlaceholder, Poster, Rating } from 'components'

import { useParams } from 'react-router'

type paramsProps = { id: string | undefined }

const FilmScene: React.FC<{}> = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const film: Film = useAppSelector(state => state.film)

    const params = useParams<paramsProps>()

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchFilm(+params.id))
        }
    }, [dispatch, params])

    if (film.id) {
        return (
            <section>
                Film Scene Section
                <article>
                    <h1>{film.title}</h1>
                    <p>{film.overview}</p>
                    <h3>Cast</h3>
                    {film?.cast.map(actor => (
                        <p key={actor}>{actor}</p>
                    ))}
                    <h3>Director</h3>
                    {film?.directors.map(director => (
                        <p key={director}>{director}</p>
                    ))}
                    <Rating value={film.rating} count={film.voteCount} />
                    <Poster src={film.poster} />
                </article>
            </section>
        )
    }

    return <FilmPlaceholder />
}

export default FilmScene
