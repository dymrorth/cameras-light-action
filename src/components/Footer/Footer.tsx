import React from 'react'

import styles from './Footer.module.scss'

import { ROUTES, LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/index'

import { Link } from 'react-router-dom'

const Footer: React.FC<{}> = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Link to={ROUTES.home}>Home</Link>
                <Link to={ROUTES.aboutMe}>About Me</Link>
                <a href={LINKEDIN_PROFILE_URL} target="_blank">
                    Linkedin
                </a>
                <a href={GITHUB_PROFILE_URL} target="_blank">
                    Github
                </a>
            </div>
        </footer>
    )
}

export default Footer
