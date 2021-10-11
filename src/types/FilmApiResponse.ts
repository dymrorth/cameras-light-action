import { Credits } from "./Credits";

export type FilmApiResponse = {
    credits: Credits
    id: number
    overview: string
    poster_path: string
    title: string
    vote_average: number
    vote_count: number
}
