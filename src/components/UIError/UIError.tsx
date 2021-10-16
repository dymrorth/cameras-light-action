import React from 'react'

import { UIErrorProps } from './UIError.types'

const UIError: React.FC<UIErrorProps> = ({ error, children }) => {
    if (error === 404) {
        return <h1>404 Not Found</h1>
    } else if (error === 500) {
        return <h1>Error 500</h1>
    }
    return <>{children}</>
}

export default UIError
