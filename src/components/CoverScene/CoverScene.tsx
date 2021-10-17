import React, { useEffect } from 'react'

import { CoversPaginated } from 'types'
import styles from './CoverScene.module.scss'

import { useThunkDispatch, useAppSelector, useRestoreScroll } from 'hooks'
import { fetchCovers } from 'store/covers/coversActions'

import { Button, Cover, CoverPlaceholder, UIError } from 'components'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const CoverScene = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const covers: CoversPaginated = useAppSelector(state => state.covers)

    const { isLoading, hasError } = useAppSelector(state => state.ui)

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

    const renderCovers = () => {
        if (isLoading) {
            return new Array(10).fill(0).map((element, index) => <CoverPlaceholder key={`CoverPlaceholder_${index}`} />)
        } else {
            return (
                <UIError error={hasError}>
                    {covers?.covers?.length > 0 ? covers?.covers.map(cover => <Cover key={cover.id} {...cover} />) : null}
                </UIError>
            )
        }
    }

    return (
        <section className={styles.covers}>
            {renderCovers()}
            {!isLoading && !hasError && (
                <div className={styles.paginator}>
                    <Button onClick={handlePrevious} isDisabled={covers?.page === 1}>
                        <FaArrowLeft />
                    </Button>
                    <p>
                        {covers?.page} of {covers?.totalPages}
                    </p>
                    <Button onClick={handleNext} isDisabled={covers?.page === covers?.totalPages}>
                        <FaArrowRight />
                    </Button>
                </div>
            )}
        </section>
    )
}

export default CoverScene
