import { configureStore } from '@reduxjs/toolkit'
import habitCounterReducer from '../features/habit-counter/habitCounterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
	habitCounters: habitCounterReducer,
  },
})
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector