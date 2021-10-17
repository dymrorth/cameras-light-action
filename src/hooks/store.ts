import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store'

import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useThunkDispatch = () => useDispatch<ThunkDispatch<RootState, void, AnyAction>>()