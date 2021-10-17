import React, { useEffect, useState } from 'react'

import { CoversPaginated } from 'types'
import styles from './CoverScene.module.scss'

import { DEBOUNCE_SEARCH_TIME } from 'constants/index'

import { useThunkDispatch, useAppSelector, useRestoreScroll, useDebounce } from 'hooks'
import { scrollToTop } from 'utils'

import { fetchCovers, searchFilm } from 'store/covers/coversActions'
import { uiIsLoading } from 'store/ui/uiActions'

import { Button, Input, Cover, CoverPlaceholder, UIError } from 'components'

import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa'

const CoverScene = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const covers: CoversPaginated = useAppSelector(state => state.covers)

    const { isLoading, hasError } = useAppSelector(state => state.ui)

    const [searchField, setSearchField] = useState('')
    const debouncedSearchField = useDebounce(searchField, DEBOUNCE_SEARCH_TIME)

    const hasCovers = covers?.covers?.length > 0

    useEffect(() => {
        fetchPopularFilms()
    }, [dispatch])

    useEffect(() => {
        dispatch(uiIsLoading())
        if (!searchField) {
            fetchPopularFilms()
        }
    }, [searchField])

    useEffect(() => {
        if (debouncedSearchField) {
            searchFilmByName(debouncedSearchField)
        }
    }, [debouncedSearchField])

    const fetchPopularFilms = (page: number = 1) => {
        dispatch(fetchCovers(page))
    }

    const searchFilmByName = (searchQuery: string, page: number = 1) => {
        dispatch(searchFilm(searchQuery, page))
    }

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> | undefined = event => {
        setSearchField(event.target?.value)
    }

    const handlePrevious = () => {
        const { page } = covers
        changePage(page - 1)
    }

    const handleNext = () => {
        const { page } = covers
        changePage(page + 1)
    }

    const changePage = (page: number) => {
        if (debouncedSearchField) {
            searchFilmByName(debouncedSearchField, page)
        } else {
            fetchPopularFilms(page)
        }
        scrollToTop()
    }

    const renderCovers = () => {
        if (isLoading) {
            return new Array(10).fill(0).map((element, index) => <CoverPlaceholder key={`CoverPlaceholder_${index}`} />)
        } else {
            return (
                <UIError error={hasError}>
                    {hasCovers ? (
                        covers?.covers?.map(cover => <Cover key={cover.id} {...cover} />)
                    ) : (
                        <>
                            <h1>No</h1>
                            <h1>movies</h1>
                            <h1>found</h1>
                        </>
                    )}
                </UIError>
            )
        }
    }

    return (
        <section className={styles.covers}>
            <Input className={styles.search} onChange={handleSearchChange} placeholder="Search..." icon={<FaSearch />} />
            {renderCovers()}
            {!isLoading && !hasError && hasCovers && (
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
