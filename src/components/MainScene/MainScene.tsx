import React, { Suspense, lazy } from 'react'

import 'styles/global.scss'
import styles from './MainScene.module.scss'

import { ROUTES } from 'constants/index'

import { ErrorFallback, Header, Footer } from 'components'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

const CoverScene = lazy(() => import('components/CoverScene/CoverScene'))
const FilmScene = lazy(() => import('components/FilmScene/FilmScene'))
const AboutMe = lazy(() => import('components/AboutMe/AboutMe'))

const MainScene: React.FC<{}> = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <main className={styles.main}>
                <Router>
                    <Header />
                    <Suspense fallback={<h2>loading...</h2>}>
                        <section className={styles.content}>
                            <Switch>
                                <Route exact path={ROUTES.home} render={() => <CoverScene />} />
                                <Route exact path={`${ROUTES.film}/:id`} render={() => <FilmScene />} />
                                <Route exact path={ROUTES.aboutMe} render={() => <AboutMe />} />
                                <Route render={() => <h1>404 Not Found</h1>} />
                            </Switch>
                        </section>
                    </Suspense>
                    <Footer />
                </Router>
            </main>
        </ErrorBoundary>
    )
}

export default MainScene
