import React from 'react'

import styles from './Cover.module.scss'
import { Cover as CoverProps } from 'api/models/Cover'

import { ROUTES } from 'constants/index'

import { Button, Rating } from 'components'

import { useHistory } from 'react-router'

const Cover: React.FC<CoverProps> = ({ id, poster, title, rating, voteCount, overview }) => {
    const history = useHistory()

    const handleFilmClick: React.MouseEventHandler<HTMLButtonElement> = event => {
        event.stopPropagation()
        history.push(`${ROUTES.film}/${id}`)
    }

    return (
        <article className={styles.cover} style={{ backgroundImage: `url(${poster})` }} onClick={handleFilmClick} data-cy="cover">
            <Rating className={styles.rating} value={rating} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.overview}>{overview}</p>
                <Button className={styles.button} onClick={handleFilmClick}>
                    More info
                </Button>
            </div>
        </article>
    )
}

export default Cover
