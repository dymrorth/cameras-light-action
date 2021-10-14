import React from 'react'

import { PosterProps } from './Poster.types'

const Poster: React.FC<PosterProps> = ({src = `https://via.placeholder.com/500x700.png?text=Poster+Not+Found`}) => {
    return <img src={src} alt="" />
}

export default Poster
