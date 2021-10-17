import React from 'react'

import styles from './FilmDetail.module.scss'
import { Film as FilmProps } from 'api/models/Film'

import { Rating } from 'components'

const FilmDetail: React.FC<FilmProps> = ({ ...film }) => {
    return (
        <article className={styles.film}>
            <div className={styles.poster} style={{ backgroundImage: `url(${film.poster})` }}></div>
            <div className={styles.main}>
                <div className={styles.top}>
                    <h1 className={styles.title}>{film.title}</h1>
                    <Rating className={styles.rating} value={film.rating} count={film.voteCount} />
                </div>
                <p className={styles.overview}>{film.overview}</p>
            </div>
            <div className={styles.break} />
            <section className={styles.direction}>
                <h3>Director</h3>
                <p className={styles.namesList}>
                    {film?.directors?.map(director => (
                        <span key={director} className={styles.name}>
                            {director}
                        </span>
                    ))}
                </p>
            </section>
            <section>
                <h3>Cast</h3>
                <p className={styles.namesList}>
                    {film?.cast?.slice(0, 10).map(actor => (
                        <span key={actor} className={styles.name}>
                            {actor}
                        </span>
                    ))}
                </p>
            </section>
        </article>
    )
}

export default FilmDetail
