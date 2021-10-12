import { Film } from 'api/models/Film';
import { Action } from 'redux'

export interface ActionFilmFetched extends Action {
    type: '@film/fetched'
    film: Film
}