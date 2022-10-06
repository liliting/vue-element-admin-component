import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '',
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.msg,
        diration: 5000,
        type: 'error',
      })
    } else {
      return res.data
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
