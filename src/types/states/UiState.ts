export type UIError = boolean | 404 | 500

export interface UIState {
    hasDarkTheme: boolean
    hasError: UIError
    isLoading: boolean
}