import React, { useEffect } from 'react'

import 'styles/global.scss'

import { useAppDispatch, useAppSelector } from './hooks'
import { fetchFilm } from './store/film/filmActions'
import { fetchCovers } from './store/covers/coversActions'

import ThemeToggler from './components/ThemeToggler/ThemeToggler'

const App = () => {
    const dispatch = useAppDispatch()

    const film = useAppSelector(state => state.film)
    const covers = useAppSelector(state => state.covers)

    useEffect(() => {
        dispatch(fetchFilm(566525))
        dispatch(fetchCovers(1))
    }, [dispatch])

    const handlePrevious = () => {
        const { page } = covers
        dispatch(fetchCovers(page - 1))
    }

    const handleNext = () => {
        const { page } = covers
        dispatch(fetchCovers(page + 1))
    }

    if (film.id && covers.page) {
        return (
            <>
                <ThemeToggler />
                <article>
                    <h1>{film.title}</h1>
                    <p>{film.overview}</p>
                    <small>{`${film.rating} (${film.voteCount})`}</small>
                    <img src={film.poster} alt="" />
                </article>

                {covers.covers.map(cover => (
                    <article key={cover.id}>
                        <img src={cover.poster} style={{ width: 200 }} alt="" />
                        <h3>{cover.title}</h3>
                        <small>{`${film.rating} (${film.voteCount})`}</small>
                    </article>
                ))}
                <div style={{ display: 'flex' }}>
                    <button onClick={handlePrevious}>prev</button>
                    <p>{covers.page}</p>
                    <button onClick={handleNext}>next</button>
                </div>
            </>
        )
    }

    return <h2>loading...</h2>
}

export default App
