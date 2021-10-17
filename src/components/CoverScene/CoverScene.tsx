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
import { useHistory, useLocation } from 'react-router'
import qs from 'qs'

const CoverScene = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const covers: CoversPaginated = useAppSelector(state => state.covers)

    const { isLoading, hasError } = useAppSelector(state => state.ui)

    const [searchField, setSearchField] = useState('')
    const debouncedSearchField = useDebounce(searchField, DEBOUNCE_SEARCH_TIME)

    const history = useHistory()
    const { search } = useLocation()

    const hasCovers = covers?.covers?.length > 0

    useEffect(() => {
        dispatch(uiIsLoading())
        if (!searchField) {
            fetchPopularFilms(getPageFromQueryParams())
        }
    }, [searchField])

    useEffect(() => {
        if (debouncedSearchField) {
            history.push({})
            searchFilmByName(debouncedSearchField)
        }
    }, [debouncedSearchField])

    const fetchPopularFilms = (page: number = 1) => {
        const searchParams = { page }
        history.push({ search: qs.stringify(searchParams) })
        dispatch(fetchCovers(page))
    }

    const searchFilmByName = (searchQuery: string) => {
        dispatch(searchFilm(searchQuery))
    }

    const getPageFromQueryParams = () => {
        const searchParams = qs.parse(search, { ignoreQueryPrefix: true })
        const { page = 1 } = searchParams
        return page as number
    }

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> | undefined = event => {
        const value = event.target?.value
        setSearchField(value)
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
        fetchPopularFilms(page)
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
            <Input className={styles.search} onChange={handleSearchChange} placeholder="Search..." value={searchField} icon={<FaSearch />} />
            {renderCovers()}
            {!isLoading && !hasError && hasCovers && !debouncedSearchField && (
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
