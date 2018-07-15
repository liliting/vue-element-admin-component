import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 5000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

export default service
