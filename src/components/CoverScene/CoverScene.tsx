import React, { useEffect } from 'react'

import { CoversPaginated } from 'types'

import { useAppDispatch, useAppSelector } from 'hooks'
import { fetchCovers } from 'store/covers/coversActions'

import { Cover } from 'components'

const CoverScene = () => {
    const dispatch = useAppDispatch()
    const covers: CoversPaginated = useAppSelector(state => state.covers)

    useEffect(() => {
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

    return (
        <section>
            Cover Scene
            {covers?.covers &&
                covers.covers.map(cover => (
                    <article key={cover.id}>
                        <Cover />
                        <img src={cover.poster} style={{ width: 200 }} alt="" />
                        <h3>{cover.title}</h3>
                        <small>{`${cover.rating} (${cover.voteCount})`}</small>
                    </article>
                ))}
            <div style={{ display: 'flex' }}>
                <button onClick={handlePrevious}>prev</button>
                <p>{covers?.page}</p>
                <button onClick={handleNext}>next</button>
            </div>
        </section>
    )
}

export default CoverScene
