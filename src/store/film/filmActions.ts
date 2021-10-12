import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchFilm = (id: number) => async (dispatch: Dispatch) => {
    const film = await FilmService.getFilm(id)
    dispatch({ type: '@film/fetched', film })
}
