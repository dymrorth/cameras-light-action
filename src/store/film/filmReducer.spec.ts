import deepFreeze from 'deep-freeze'

import { FilmState } from 'types'
import FilmFixture from 'api/fixtures/FilmFixture'

import { filmReducer } from './filmReducer'

describe('film reducer', () => {
    let state: FilmState
    beforeEach(() => {
        state = { film: undefined }
    })
    describe('@film/fetched', () => {
        it('updates films state', () => {
            // FilmService Mock => FilmFixture => Film
            deepFreeze(state)
            filmReducer(state, { type: '@film/fetched', film: {} })
        })
    })
})
