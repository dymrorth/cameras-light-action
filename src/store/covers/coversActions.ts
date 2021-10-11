import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchCovers = (page: number) => async (dispatch: Dispatch) => {
    const covers = await FilmService.getCovers(page)
    dispatch({ type: '@covers/fetched', covers })
}
