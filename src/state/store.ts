import {
  Action,
  combineSlices,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit'
import { currentUserSlice } from './slices/current-user-slice'
// import { globalConfigSlice } from './slices/global-config-slice'

const rootReducer = combineSlices(/* globalConfigSlice, */ currentUserSlice)

export const configureAppStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
    },
    preloadedState,
  })

  return store
}

export const store = configureAppStore()

export type AppStore = typeof store

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = AppStore['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
