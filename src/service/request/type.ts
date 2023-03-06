import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface myInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: any) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface SKYRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: myInterceptors<T>
}
