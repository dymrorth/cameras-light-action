import { Action } from 'redux'
import { CoversPaginated } from 'types'

export interface ActionCoversFetched extends Action {
    type: '@covers/fetched'
    covers: CoversPaginated
}
