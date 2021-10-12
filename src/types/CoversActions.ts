import { Action } from 'redux'
import { CoversPaginated } from './CoversPaginated'

export interface ActionCoversFetched extends Action {
    type: '@covers/fetched'
    covers: CoversPaginated
}
