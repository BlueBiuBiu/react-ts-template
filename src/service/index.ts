import { BASE_URL, TIME_OUT } from './config'
import SKYRequest from './request'

const Request = new SKYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default Request
export * from './modules/home'
