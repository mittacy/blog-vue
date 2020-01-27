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
      ...opts
    }
    let response = await axios(options)
    if (response.data) {
      console.log(response.data)
      // if (response.data.code === 0) {
      //   return response.data
      // } else {
      //   // handle user auth here
      //   if (response && response.data && response.data.code === -12) {
      //     window.location = `/api/auth/login`
      //   }
      //   throw new Error(response.data.message)
      // }
    }
  } catch (err) {
    console.log("错误：", err.response.data)
    // if (opts.autoErrMsg !== false) {
    //   let msg = `${err}`
    //   if (err) msg = err.message || msg
    //   if (err.response) msg = `${err.response.statusText} ${err.response.status}` || msg
    //   if (err.response && err.response.data && err.response.data.message) msg = `${err.response.data.message} ${err.response.data.status}` || msg
    //   Message.error(msg)
    // }
    // throw err
  }
}