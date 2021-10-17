import React from 'react'

import FilmScene from './FilmScene'
import FilmFixture from 'api/fixtures/FilmFixtures'

import { store } from 'store'

import { render, RenderResult, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

window.scroll = jest.fn()

const customRender = (ui: React.ReactElement, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) }: any = {}) => {
    const Wrapper: React.FC = ({ children }) => (
        <Provider store={store}>
            <MemoryRouter initialEntries={history.initialEntries}>{children}</MemoryRouter>
        </Provider>
    )
    return {
        ...render(ui, { wrapper: Wrapper }),
        history,
    }
}

describe('<FilmScene />', () => {
    describe('when initialized', () => {
        it('has a loading FilmPlaceholder', () => {
            store.dispatch({ type: '@ui/loading' })

            const { asFragment }: RenderResult = customRender(
                <Route path="/">
                    <FilmScene />
                </Route>,
                { route: '/1' }
            )
            const loader = screen.getByTestId('FilmPlaceholder')
            expect(loader).toBeInTheDocument()
            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('when film loaded', () => {
        it('has film information', () => {
            store.dispatch({ type: '@film/fetched', film: FilmFixture.filmFromApi() })
            store.dispatch({ type: '@ui/loaded' })

            const { asFragment }: RenderResult = customRender(
                <Route path="/">
                    <FilmScene />
                </Route>,
                { route: '/1' }
            )
            const title = screen.getByText(FilmFixture.film().title)
            expect(title).toBeInTheDocument()
            expect(asFragment()).toMatchSnapshot()

        })
    })
})
