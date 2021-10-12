import { Film } from 'api/models/Film'

class FilmFixture {
    filmFromApi() {
        return {
            credits: {
                cast: [
                    {
                        adult: false,
                        gender: 2,
                        id: 1489211,
                        known_for_department: 'Acting',
                        name: 'Simu Liu',
                        original_name: 'Simu Liu',
                        popularity: 8.687,
                        profile_path: '/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg',
                        cast_id: 11,
                        character: 'Shaun / Shang-Chi',
                        credit_id: '5d33b7e66a300b2f7ea6bc88',
                        order: 0,
                    },
                    {
                        adult: false,
                        gender: 2,
                        id: 1337,
                        known_for_department: 'Acting',
                        name: 'Tony Leung Chiu-wai',
                        original_name: 'Tony Leung Chiu-wai',
                        popularity: 8.839,
                        profile_path: '/pMZJ7c7ururMg5TBjXWWIuT3WFI.jpg',
                        cast_id: 12,
                        character: 'Xu Wenwu',
                        credit_id: '5d33c5fc2f8d094522dbaf68',
                        order: 1,
                    },
                ],
                crew: [
                    {
                        adult: false,
                        gender: 2,
                        id: 1144604,
                        known_for_department: 'Directing',
                        name: 'Destin Daniel Cretton',
                        original_name: 'Destin Daniel Cretton',
                        popularity: 4.137,
                        profile_path: '/6pOwxAXGsaqjlJmAdz9k3UArBdS.jpg',
                        credit_id: '5c8965e39251410cf7c195f6',
                        department: 'Directing',
                        job: 'Director',
                    },
                ],
            },
            id: 566525,
            overview:
                'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
            poster_path: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
            title: 'Shang-Chi and the Legend of the Ten Rings',
            vote_average: 7.8,
            vote_count: 1237,
        }
    }

    film() {
        return new Film(
            566525,
            'Shang-Chi and the Legend of the Ten Rings',
            'w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
            7.8,
            1237,
            'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
            {
                cast: [
                    {
                        adult: false,
                        gender: 2,
                        id: 1489211,
                        known_for_department: 'Acting',
                        name: 'Simu Liu',
                        original_name: 'Simu Liu',
                        popularity: 8.687,
                        profile_path: '/zrJjYjOYzDj7eY9oiHAoz8Yh0yk.jpg',
                        cast_id: 11,
                        character: 'Shaun / Shang-Chi',
                        credit_id: '5d33b7e66a300b2f7ea6bc88',
                        order: 0,
                    },
                    {
                        adult: false,
                        gender: 2,
                        id: 1337,
                        known_for_department: 'Acting',
                        name: 'Tony Leung Chiu-wai',
                        original_name: 'Tony Leung Chiu-wai',
                        popularity: 8.839,
                        profile_path: '/pMZJ7c7ururMg5TBjXWWIuT3WFI.jpg',
                        cast_id: 12,
                        character: 'Xu Wenwu',
                        credit_id: '5d33c5fc2f8d094522dbaf68',
                        order: 1,
                    },
                ],
                crew: [
                    {
                        adult: false,
                        gender: 2,
                        id: 1144604,
                        known_for_department: 'Directing',
                        name: 'Destin Daniel Cretton',
                        original_name: 'Destin Daniel Cretton',
                        popularity: 4.137,
                        profile_path: '/6pOwxAXGsaqjlJmAdz9k3UArBdS.jpg',
                        credit_id: '5c8965e39251410cf7c195f6',
                        department: 'Directing',
                        job: 'Director',
                    },
                ],
            }
        )
    }
}

export default new FilmFixture()
