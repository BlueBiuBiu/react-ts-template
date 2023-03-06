import skyRequest from '../'

interface IHomeData {
  data: any
  returnCode: string
  success: boolean
}

export function getHomeData() {
  return skyRequest.get<IHomeData>({
    url: '/home/multidata'
  })
}
