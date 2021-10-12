import { CoversState, ActionCoversFetched } from 'types'

const initialState: CoversState = {
    covers: undefined,
}

export const coversReducer = (state = initialState, action: ActionCoversFetched) => {
    switch (action.type) {
        case '@covers/fetched':
            return action.covers
        default:
            return state
    }
}
