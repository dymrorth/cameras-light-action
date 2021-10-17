import React from 'react'

import { InputProps } from './Input.types'
import styles from './Input.module.scss'

import classNames from 'classnames'

const Input: React.FC<InputProps> = ({ className, icon, ...props }) => {
    const inputWrapClasses = classNames(styles.inputWrap, className)

    return (
        <div className={inputWrapClasses}>
            <input type="text" {...props} className={styles.input} />
            {icon && (
                <div className={styles.icon}>
                    {icon}
                </div>
            )}
        </div>
    )
}

export default Input
