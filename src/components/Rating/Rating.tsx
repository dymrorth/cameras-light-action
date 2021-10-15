import React from 'react'

import { RatingProps } from './Rating.types'
import styles from './Rating.module.scss'

import classNames from 'classnames'

const Rating: React.FC<RatingProps> = ({ count = 0, max = 10, value = 0, className }) => {
    const percent = (100 * value) / max
    const quarter = Math.round(percent / 25)

    const ratingClasses = classNames(styles.gauge, className)

    return (
        <div>
            <div className={ratingClasses} data-quarter={quarter}>
                <span className={styles.value}>{value}</span>
                {!!count && <span className={styles.count}>{`(${count})`}</span>}
            </div>
        </div>
    )
}

export default Rating
