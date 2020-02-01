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
// 获取某页所有分类
export const apiGetCategories = (page) => {
  return opts({
    method: 'get',
    url: '/category_page/'+page
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

/* 文章api */
export const apiGetArticles = (page) => {
  return opts({
    method: 'get',
    url: '/article_page/'+page
  })
}