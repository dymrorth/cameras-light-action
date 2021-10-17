import React from 'react'

import styles from './FilmPlaceholder.module.scss'

const FilmPlaceholder = () => {
    return (
        <div className={styles.film}>
            <div className={styles.poster}></div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.title}></div>
                    <div className={styles.rating}></div>
                </div>
                <div className={styles.overview}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default FilmPlaceholder
