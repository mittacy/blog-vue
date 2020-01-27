import axios from 'axios';
// import QS from 'qs';

// 请求超时
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:5201/api'

// 请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截
axios.interceptors.response.use((response) => {
  // Do something with response data
  return response
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})
// 响应拦截

// 处理响应
const _handleResponse = (res) => {
  const data = res.data
  return Promise.resolve(data)
}

// 请求封装
function get (url, query) {
  return axios.get(url, {
    params: query
  }).then(_handleResponse)
}
function post (url, query) {
  return axios.post(url, query).then(_handleResponse)
}
function put (url, body) {
  return axios.put(url, body).then(_handleResponse)
}
function del (url, query) {
  return axios.delete(url, {
    params: query
  }).then(_handleResponse)
}

export {get, post, put, del}