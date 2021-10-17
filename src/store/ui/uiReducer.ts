import { UIState } from 'types'

import { AnyAction } from 'redux'

const initialState: UIState = {
    hasDarkTheme: true,
    hasError: false,
    isLoading: false,
}

export const uiReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case '@ui/loading':
            return { ...state, isLoading: true, hasError: false }
        case '@ui/loaded':
            return { ...state, isLoading: false }
        case '@ui/errored':
            return { isloading: false, hasError: action.error ?? true }
        default:
            return state
    }
}
