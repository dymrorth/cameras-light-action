import FilmFixture from 'api/fixtures/FilmFixtures'

import { apiResponseToFilm } from './apiResponseToFilm'

describe('Adapter apiResponseToFilm', () => {
    describe('when receives a film api response', () => {
        it('returns new Film from models', () => {
            const filmFromApi = FilmFixture.filmFromApi()
            const film = apiResponseToFilm(filmFromApi, '')

            expect(film).toEqual(FilmFixture.film())
        })
    })
})
