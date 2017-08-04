import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://fm.jackyang.me',
  // baseURL: 'http://localhost:9003',
  timeout: 2000
})

export default axiosInstance
