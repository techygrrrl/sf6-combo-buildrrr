import { useContext } from 'react'
import { Fetcher } from 'swr'
import useSWRImmutable from 'swr/immutable'
import { ApiClient } from './api-client.ts'
import { ApiProviderContext } from './api-context.ts'

export const useApiClient = (): ApiClient => {
  return useContext(ApiProviderContext)
}

type ApiData<T> = {
  loading: boolean
  error: boolean
  errorMessage: string | null
  data?: T
  mutate: () => void
}

export const useApiData = <T>(url: string): ApiData<T> => {
  const apiClient = useApiClient()

  const fetcher: Fetcher<T, string> = async (id) => {
    const res = await apiClient.makeGet<T>(id)
    return res.data
  }

  const { data, error, isLoading, mutate } = useSWRImmutable(url, fetcher)

  return {
    loading: isLoading,
    data,
    error: !!error,
    errorMessage: error,
    mutate,
  }
}
