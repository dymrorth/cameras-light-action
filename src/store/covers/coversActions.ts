import { dispatchErrorByName } from 'utils'
import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchCovers = (page: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: '@ui/loading' })
        const covers = await FilmService.getCovers(page)
        dispatch({ type: '@covers/fetched', covers })
        dispatch({ type: '@ui/loaded' })
    } catch (error: any) {
        dispatchErrorByName(error, dispatch)
    }
}

export const searchFilm = (search: string, page?: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: '@ui/loading' })
        const covers = await FilmService.searchFilm(search, page)
        dispatch({ type: '@covers/fetched', covers })
        dispatch({ type: '@ui/loaded' })
    } catch (error: any) {
        dispatchErrorByName(error, dispatch)
    }
}