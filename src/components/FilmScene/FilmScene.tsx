import React, { useEffect } from 'react'

import { Film } from 'api/models/Film'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchFilm } from 'store/film/filmActions'

const FilmScene: React.FC<{}> = () => {
    const dispatch = useAppDispatch()
    const film: Film = useAppSelector(state => state.film)

    useEffect(() => {
        dispatch(fetchFilm(566525))
    }, [dispatch])

    if (film.id) {
        return (
            <section>
                Film Scene Section
                <article>
                    <h1>{film.title}</h1>
                    <p>{film.overview}</p>
                    <small>{`${film.rating} (${film.voteCount})`}</small>
                    <img src={film.poster} alt="" />
                </article>
            </section>
        )
    }

    return null
}

export default FilmScene
