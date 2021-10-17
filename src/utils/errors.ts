import { Dispatch } from 'redux'

export const dispatchErrorByName = (error: any, dispatch: Dispatch) => {
    if (error.name === 'ApiError') {
        dispatch({ type: '@ui/errored', error: 404 })
    } else {
        dispatch({ type: '@ui/errored', error: 500 })
    }
}
