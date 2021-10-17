import { UIError } from 'types'

export const uiIsLoading = () => {
    return { type: '@ui/loading' }
}
export const uiIsLoaded = () => {
    return { type: '@ui/loaded' }
}
export const uiHasError = (error: UIError) => {
    return { type: '@ui/errored', error }
}
