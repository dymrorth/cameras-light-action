import React, { useState, useEffect } from 'react'

export const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        return () => {
            clearTimeout(timeoutHandler)
        }
    }, [value])

    return debouncedValue
}
