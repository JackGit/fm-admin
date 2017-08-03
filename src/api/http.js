import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://yotta-tech.cn:4141',
  // baseURL: 'http://192.168.1.103:4141',
  timeout: 2000
})

export default axiosInstance
