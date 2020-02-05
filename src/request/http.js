import axios from 'axios';

// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截

// 响应拦截

// 请求封装
export default async opts => {
  // 根据具体业务逻辑制定 如何处置resolve和reject
  try {
    const options = {
      baseURL: 'http://localhost:5201/api',
      timeout: 5000,
      headers: {'adminToken': sessionStorage.getItem('adminToken')},
      ...opts
    }
    let response = await axios(options)
    return response.data
  } catch (err) {
    switch(err.response.status) {
      case 500: console.log("服务器错误");break;
      case 400: {
        return err.response.data
      }
      case 404: console.log("资源不存在");break;
      case 401: console.log("权限不足");break;
      default: return err.response.data;
    }
  }
}