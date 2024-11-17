import { FC, PropsWithChildren, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, configureAppStore } from '../state/store'

/**
 * Provides a Next.js-friendly store.
 * For more info and help injecting state for testing: https://redux.js.org/usage/nextjs
 */
export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = configureAppStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
