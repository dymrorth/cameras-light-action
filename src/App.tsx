import React, { Suspense, lazy } from 'react'

import 'styles/global.scss'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Topbar, Footer } from 'components'

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
                        <Route exact path="/" render={() => <CoverScene />} />
                        <Route exact path="/film/:id" render={() => <FilmScene />} />
                        <Route exact path="/about-me" render={() => <AboutMe />} />
                    </Switch>
                </Router>
            </Suspense>
            <Footer />
        </main>
    )
}

export default App
