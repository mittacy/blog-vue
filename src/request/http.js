import axios from 'axios';

// 错误信息
let UNKONWNERROR        = "Unkonwn error"
let NO_EXIST            = "Resource does not exist"
let EXISTED             = "Resource already exists"
let CATE_NO_EXIST       = "Category does not exist"
let CATE_EXIST          = "Category already exists"
let ARTICLE_EXIST       = "Article already exists"
let ARTICLE_NO_EXIST    = "Article does not exists"
let ADMIN_NO_EXIST      = "Administrators does not exist"
let NO_POWER            = "Permission denied"
let SQL_ERROR           = "Database operation error"
let CONVERSIOIN_ERROR   = "Data conversion error"
let ANALYSIS_ERROR      = "JSON error"
let CHECKCONTENT        = "请检查提交数据是否正确或分类是否存在"
let NO_NULL             = "Data cannot be empty"
let CONTROLLER_SUCCESS  = "Success"
let NAMEERROR		        = "Name error"
let PASSWORDERROR	      = "Password error"
let CREATETOKENERROR    = "Create token error"

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