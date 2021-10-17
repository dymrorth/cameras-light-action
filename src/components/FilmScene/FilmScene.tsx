import React, { useEffect } from 'react'

import { Film } from 'api/models/Film'
import styles from './FilmScene.module.scss'

import { useAppSelector, useThunkDispatch, useRestoreScroll } from 'hooks'
import { fetchFilm } from 'store/film/filmActions'

import { FilmPlaceholder, FilmDetail, UIError, Button } from 'components'

import { useParams, useHistory } from 'react-router'
import { IoReturnDownBackOutline } from 'react-icons/io5'

type paramsProps = { id: string | undefined }

const FilmScene: React.FC<{}> = () => {
    useRestoreScroll()

    const dispatch = useThunkDispatch()
    const film: Film = useAppSelector(state => state.film)

    const { isLoading, hasError } = useAppSelector(state => state.ui)

    const params = useParams<paramsProps>()
    const history = useHistory()

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchFilm(+params.id))
        }
    }, [dispatch, params])

    const handleBackClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        history.goBack()
    }

    if (isLoading) {
        return <FilmPlaceholder />
    } else {
        return (
            <UIError error={hasError}>
                <Button onClick={handleBackClick} className={styles.backButton}><IoReturnDownBackOutline /> Back</Button>
                <FilmDetail {...film}/>
            </UIError>
        )
    }
}

export default FilmScene
