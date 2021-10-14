import React from 'react'

import styles from './CoverPlaceholder.module.scss'

const CoverPlaceholder: React.FC<{}> = () => {
    return (
        <div className={styles.cover}>
            <div className={styles.rating}></div>
            <div className={styles.title}></div>
        </div>
    )
}

export default CoverPlaceholder
