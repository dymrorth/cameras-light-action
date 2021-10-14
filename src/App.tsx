import React, { Suspense, lazy } from 'react'

import 'styles/global.scss'

import { ROUTES } from 'constants/index'

import { Topbar, Footer } from 'components'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const CoverScene = lazy(() => import('components/CoverScene/CoverScene'))
const FilmScene = lazy(() => import('components/FilmScene/FilmScene'))
const AboutMe = lazy(() => import('components/AboutMe/AboutMe'))

const App = () => {
    return (
        <main>
            <Topbar />
            <Suspense fallback={<h2>loading...</h2>}>
                <Router>
                    <Switch>
                        <Route exact path={ROUTES.home} render={() => <CoverScene />} />
                        <Route exact path={ROUTES.film} render={() => <FilmScene />} />
                        <Route exact path={ROUTES.aboutMe} render={() => <AboutMe />} />
                        <Route render={() => <h1>404 Not Found</h1>} />
                    </Switch>
                </Router>
            </Suspense>
            <Footer />
        </main>
    )
}

export default App
