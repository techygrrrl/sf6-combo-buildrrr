import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../state/hooks/redux-hooks'
import { actionSetCurrentUserUser } from '../../state/slices/current-user-slice'
import { ApiClient } from './api-client'
import { ApiProviderContext } from './api-context.ts'
import { GetUser } from './requests-responses'

type ApiProviderProps = PropsWithChildren & {}

export const ApiProvider: FC<ApiProviderProps> = ({ children }) => {
  const apiClient = useMemo(() => new ApiClient(), [])
  const dispatch = useAppDispatch()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(
    function loadUser() {
      if (!mounted) return

      apiClient.makeGet<GetUser>('/api/user').then(({ data }) => {
        const action = actionSetCurrentUserUser({
          display_name: data.display_name,
          id: data.id,
          profile_image_url: data.profile_image_url,
          login: data.login,
        })
        dispatch(action)
      })
    },
    [apiClient, mounted, dispatch],
  )

  return (
    <ApiProviderContext.Provider value={apiClient}>
      {children}
    </ApiProviderContext.Provider>
  )
}
