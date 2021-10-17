import { dispatchErrorByName } from 'utils'
import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchFilm = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: '@ui/loading' })
        const film = await FilmService.getFilm(id)
        dispatch({ type: '@film/fetched', film })
        dispatch({ type: '@ui/loaded' })
    } catch (error: any) {
        dispatchErrorByName(error, dispatch)
    }
}

