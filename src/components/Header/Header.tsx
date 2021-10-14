import React from 'react'

import styles from './Header.module.scss'

import { ThemeToggler } from 'components'

const Header: React.FC<{}> = () => {
    return (
        <header className={styles.header}>
            Header
            <ThemeToggler />
        </header>
    )
}

export default Header
