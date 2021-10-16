import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchFilm = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: '@ui/loading' })
        const film = await FilmService.getFilm(id)
        dispatch({ type: '@film/fetched', film })
        dispatch({ type: '@ui/loaded' })
    } catch (error: any) {
        if (error.name === 'ApiError') {
            dispatch({ type: '@ui/errored', error: 404 })
        } else {
            dispatch({ type: '@ui/errored', error: 500 })
        }
    }
}
