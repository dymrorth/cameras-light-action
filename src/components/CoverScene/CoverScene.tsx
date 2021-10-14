import React, { useEffect } from 'react'

import { CoversPaginated } from 'types'

import { useThunkDispatch, useAppSelector } from 'hooks'
import { fetchCovers } from 'store/covers/coversActions'

import { Button, Cover, CoverPlaceholder } from 'components'

const CoverScene = () => {
    const dispatch = useThunkDispatch()
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
            <Button>Cover Scene</Button>
            {covers?.covers?.length > 0
                ? covers?.covers.map(cover => <Cover key={cover.id} {...cover} />)
                : new Array(10).fill(0).map((element, index) => (
                      <div key={`CoverPlaceholder_${index}`}>
                          <CoverPlaceholder />
                      </div>
                  ))}
            <div style={{ display: 'flex' }}>
                <Button onClick={handlePrevious}>{'<'}</Button>
                <p>{covers?.page}</p>
                <Button onClick={handleNext}>{'>'}</Button>
            </div>
        </section>
    )
}

export default CoverScene
