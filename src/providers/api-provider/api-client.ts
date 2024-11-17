import Axios, { AxiosInstance } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export class ApiClient {
  private axios: AxiosInstance = Axios.create({
    baseURL: API_BASE_URL,
  })

  makeGet<ResType>(url: string) {
    return this.axios.get<ResType>(url)
  }

  makePost<ResType, ReqType>(url: string, data: ReqType) {
    return this.axios.post<ResType>(url, data)
  }
}
