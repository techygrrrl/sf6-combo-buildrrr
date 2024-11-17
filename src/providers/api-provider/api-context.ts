import { createContext } from 'react'
import { ApiClient } from './api-client.ts'

export const ApiProviderContext = createContext<ApiClient>(new ApiClient())
