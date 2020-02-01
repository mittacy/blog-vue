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
    url: '/category_page/' + page
  })
}
// 获取某个分类所有文章
export const apiGetArticlesFromCate = (categoryID) => {
  return opts({
    method: 'get',
    url: '/category/' + categoryID
  })
}
// 添加分类
export const apiAddCategory = (data) => {
  return opts({
    method: 'post',
    url: '/category',
    data
  })
}
// 修改分类
export const apiPutCategory = (data) => {
  return opts({
    method: 'put',
    url: '/category',
    data
  })
}
// 删除分类
export const apiDeleteCategory = (data) => {
  return opts({
    method: 'delete',
    url: '/category',
    data
  })
}

/* 文章api */
// 分页获取文章
export const apiGetArticles = (page) => {
  return opts({
    method: 'get',
    url: '/article_page/' + page
  })
}