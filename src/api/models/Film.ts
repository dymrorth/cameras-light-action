import { Credits, Person } from 'types'

export class Film {
    public directors: string[]
    public cast: string[]

    constructor(
        public id: number,
        public title: string,
        public poster: string,
        public rating: number,
        public voteCount: number,
        public overview: string,
        public credits: Credits
    ) {
        this.directors = getDirectors(credits?.crew)
        this.cast = getCast(credits?.cast)
    }
}

const getDirectors = (crew: Person[]) => crew.filter(person => person.job === 'Director').map(director => director.name)

const getCast = (cast: Person[]) => cast.map(person => person.name)
