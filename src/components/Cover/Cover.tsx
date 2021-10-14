import { Cover as CoverProps } from 'api/models/Cover'
import React from 'react'

const Cover: React.FC<CoverProps> = ({ id, poster, title, rating, voteCount }) => {
    return (
        <article>
            <img src={poster} style={{ width: 200 }} alt="" />
            <h3>{title}</h3>
            <small>{`${rating} (${voteCount})`}</small>
        </article>
    )
}

export default Cover
