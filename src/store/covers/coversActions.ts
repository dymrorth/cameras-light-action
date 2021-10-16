import FilmService from 'api/services/FilmService'

import { Dispatch } from 'redux'

export const fetchCovers = (page: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: '@ui/loading' })
        const covers = await FilmService.getCovers(page)
        dispatch({ type: '@covers/fetched', covers })
        dispatch({ type: '@ui/loaded' })
    } catch (error: any) {
        if (error.name === 'ApiError') {
            dispatch({ type: '@ui/errored', error: 404 })
        } else {
            dispatch({ type: '@ui/errored', error: 500 })
        }
    }
}
