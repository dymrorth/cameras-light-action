import React from 'react'

import styles from './Footer.module.scss'

import { ROUTES, LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL } from 'constants/index'

import { Link } from 'react-router-dom'
import { FaFilm, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BsFilePersonFill } from 'react-icons/bs'

const Footer: React.FC<{}> = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Link to={ROUTES.home}>
                    <FaFilm />
                    Home
                </Link>
                <Link to={ROUTES.aboutMe}>
                    <BsFilePersonFill />
                    About Me
                </Link>
                <a href={LINKEDIN_PROFILE_URL} target="_blank">
                    <FaLinkedin />
                    Linkedin
                </a>
                <a href={GITHUB_PROFILE_URL} target="_blank" style={{}}>
                    <FaGithub />
                    Github
                </a>
            </div>
        </footer>
    )
}

export default Footer
