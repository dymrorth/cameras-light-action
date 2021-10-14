import React from 'react'

import { EMAIL } from 'constants/index'

import styles from './AboutMe.module.scss'

const AboutMe: React.FC<{}> = () => {
    return (
        <section className={styles.card}>
            <div className={styles.front}>
                <h3 className={styles.title}>Daniel Barbero Muñoz</h3>
                <p className={styles.subtitle}>Frontend Developer</p>
            </div>

            <div className={styles.back}>
                <p className={styles.body}>
                    Hello! My name is Daniel and I'm a frontend developer. <br />
                    I create web apps, I'm interested in data visualization and I like learning new tech.
                    <br />
                    <br /> Always trying to make a better world.
                    <br />
                    <br />
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
            </div>
        </section>
    )
}

export default AboutMe
