import React from 'react'

import styles from './Header.module.scss'

import { ROUTES } from 'constants/index'

import { ThemeToggler } from 'components'

import { useHistory } from 'react-router'

const Header: React.FC<{}> = () => {
    const history = useHistory()

    const handleHistoryPush: (route: string) => React.MouseEventHandler<HTMLHeadElement> = route => event => {
        event.stopPropagation()
        history.push(route)
    }

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.title} onClick={handleHistoryPush(ROUTES.home)}>
                    Lights Camera Action!
                </h1>
                <aside className={styles.aside}>
                    <ThemeToggler />
                    <div className={styles.aboutMeLink} onClick={handleHistoryPush(ROUTES.aboutMe)}>
                        <div className={styles.profilePicture}></div>
                    </div>
                </aside>
            </div>
        </header>
    )
}

export default Header
