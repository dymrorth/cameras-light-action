import React from 'react'

import { RatingProps } from './Rating.types'
import styles from './Rating.module.scss'

const Rating: React.FC<RatingProps> = ({ count = 0, max = 10, value = 0 }) => {

    const percent = (100 * value) / max
    const quarter = Math.round(percent/25)

    return (
        <div>
            <div className={styles.gauge} data-quarter={quarter}>
                <span className={styles.value}>{value}</span>
                <span className={styles.count}>{`(${count})`}</span>
            </div>
        </div>
    )
}

export default Rating
