import React, { useLayoutEffect } from 'react'

import { scrollToTop } from 'utils'

import { useLocation } from 'react-router-dom'

export const useRestoreScroll = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
        scrollToTop()
    }, [pathname])
}
