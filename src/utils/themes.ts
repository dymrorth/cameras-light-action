import { LOCAL_USER_THEME_KEY } from '../constants'

const getStyles = () => getComputedStyle(document.documentElement)

export const getCSSCustomProp = (propKey: string) => {
    let response = getStyles().getPropertyValue(propKey)

    if (response.length) {
        response = response.replace(/"/g, '').trim()
    }

    return response
}

export const applyTheme = (theme: string) => {
    let currentTheme = theme || localStorage.getItem(LOCAL_USER_THEME_KEY)

    if (currentTheme) {
        document.documentElement.setAttribute(`data-${LOCAL_USER_THEME_KEY}`, currentTheme)
    }
}

export const toggleTheme = () => {
    let currentTheme = localStorage.getItem(LOCAL_USER_THEME_KEY)

    switch (currentTheme) {
        case 'light':
            currentTheme = 'dark'
            break
        case 'dark':
            currentTheme = 'light'
            break
        default:
            currentTheme = getCSSCustomProp('--color-mode') === 'dark' ? 'light' : 'dark'
            break
    }

    localStorage.setItem(LOCAL_USER_THEME_KEY, currentTheme)

    return currentTheme
}
