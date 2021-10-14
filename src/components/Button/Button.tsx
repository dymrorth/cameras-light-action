import React from 'react'

import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

const Button: React.FC<ButtonProps> = ({ isDisabled = false, ...props }) => {
    return <button className={styles.button} {...props} disabled={isDisabled}></button>
}

export default Button
