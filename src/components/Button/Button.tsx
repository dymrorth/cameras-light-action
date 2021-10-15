import React from 'react'

import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

import classNames from 'classnames'

const Button: React.FC<ButtonProps> = ({ isDisabled = false, className, ...props }) => {
    const buttonClasses = classNames(styles.button, className)

    return <button className={buttonClasses} {...props} disabled={isDisabled}></button>
}

export default Button
