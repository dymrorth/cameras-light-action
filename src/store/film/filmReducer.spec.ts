import deepFreeze from 'deep-freeze'

import { FilmState } from 'types'
import FilmFixture from 'api/fixtures/FilmFixtures'

import { filmReducer } from './filmReducer'

describe('filmReducer', () => {
    let state: FilmState
    beforeEach(() => {
        state = { film: undefined }
    })
    describe('default', () => {
        it('returns same state after undeclared action', () => {
            deepFreeze(state)
            const newState = filmReducer(state, {type: 'default'})

            expect(state).toEqual(newState)
        })
    })
    describe('@film/fetched', () => {
        it('returns new state after fetch film action', () => {
            const film = FilmFixture.film()
            deepFreeze(state)
            const newState = filmReducer(state, { type: '@film/fetched', film })

            expect(newState).toEqual(film)
        })
    })
})
