import axios from 'axios';

// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求封装
export default async opts => {
  // 根据具体业务逻辑制定 如何处置resolve和reject
  try {
    const options = {
      baseURL: 'http://localhost:5201/api',
      timeout: 5000,
      headers: {'adminToken': sessionStorage.getItem('adminToken') === null ? '' : sessionStorage.getItem('adminToken')},
      ...opts
    }
    const response = await axios(options)
    return response
  } catch (err) {
    return err.response
  }
}