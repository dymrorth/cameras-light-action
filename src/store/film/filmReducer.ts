import { FilmState, ActionFilmFetched } from 'types'

const initialState: FilmState = {
    film: undefined,
}

export const filmReducer = (state = initialState, action: ActionFilmFetched) => {
    switch (action.type) {
        case '@film/fetched':
            return action.film
        default:
            return state
    }
}
