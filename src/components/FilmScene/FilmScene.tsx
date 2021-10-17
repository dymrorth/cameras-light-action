import React, { useEffect } from 'react'

import { Film } from 'api/models/Film'

import { useAppSelector, useThunkDispatch, useRestoreScroll } from 'hooks'
import { fetchFilm } from 'store/film/filmActions'

import { FilmPlaceholder, Poster, Rating, UIError } from 'components'

import { useParams } from 'react-router'

type paramsProps = { id: string | undefined }

const FilmScene: React.FC<{}> = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const film: Film = useAppSelector(state => state.film)

    const { isLoading, hasError } = useAppSelector(state => state.ui)

    const params = useParams<paramsProps>()

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchFilm(+params.id))
        }
    }, [dispatch, params])

    if (isLoading) {
        return <FilmPlaceholder />
    } else {
        return (
            <UIError error={hasError}>
                <section>
                    <article>
                        <h1>{film.title}</h1>
                        <p>{film.overview}</p>
                        <h3>Cast</h3>
                        {film?.cast && film?.cast.map(actor => <p key={actor}>{actor}</p>)}
                        <h3>Director</h3>
                        {film?.directors && film?.directors.map(director => <p key={director}>{director}</p>)}
                        <Rating value={film.rating} count={film.voteCount} />
                        <Poster src={film.poster} />
                    </article>
                </section>
            </UIError>
        )
    }
}

export default FilmScene
