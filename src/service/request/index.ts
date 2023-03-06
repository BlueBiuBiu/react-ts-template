import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import { SKYRequestConfig } from './type'

class SKYRequest {
  static request<T>(arg0: { url: string }) {
    throw new Error('Method not implemented.')
  }
  instance: AxiosInstance
  constructor(config: SKYRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局请求成功的拦截");
        return config
      },
      (err) => {
        // console.log("全局请求失败的拦截");
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局响应成功的拦截")
        return res.data
      },
      (err) => {
        // console.log("全局响应失败的拦截")
        return err
      }
    )

    // 特殊请求需要单独设置拦截器的个例
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = AxiosResponse>(config: SKYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应获取结果后进行拦截处理
          if (config.interceptors?.responseSuccessFn) {
            config.interceptors?.responseSuccessFn(res)
          }

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: SKYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: SKYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: SKYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: SKYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default SKYRequest
