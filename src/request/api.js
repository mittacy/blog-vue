import opts from './http'

// 管理员api
export const checkAdmin = (data) => { return opts({method: 'post', url: '/admin', data})}
export const apiGetAdminInformation = (params) => {
  return opts({
    method: 'get',
    url: '/admin',
    params
  })
}

/* 分类api */
// 获取所有分类名称
export const apiGetCategories = (params) => {
  return opts({
    method: 'get',
    url: '/categories',
    params
  })
}
export const apiAddCategory = (data) => {
  return opts({
    method: 'post',
    url: '/category',
    data
  })
}
export const apiPutCategory = (data) => {
  return opts({
    method: 'put',
    url: '/category',
    data
  })
}
export const apiDeleteCategory = (data) => {
  return opts({
    method: 'delete',
    url: '/category',
    data
  })
}
// 获取某个分类的所有文章
// export const getCateArticles = (params) => {
//   return opts({
//     method: 'get',
//     url: '/api/category/:id',
//     params
//   })
// }