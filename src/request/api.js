import opts from './http'

/* --- 管理员 api --- */
// 日志文件
export const apiErrLog = () => {
  return opts({
    method: 'get',
    url: '/errlog'
  })
}
export const apiverifyAdmin = () => {
  return opts({
    method: 'get',
    url: '/verify'
  })
}
// 管理员
export const apiCheckAdmin = (data) => {
  return opts({
    method: 'post',
    url: '/admin',
    data
  })
}
export const apiGetAdminInformation = (params) => {
  return opts({
    method: 'get',
    url: '/admin',
    params
  })
}
export const apiPutAdmin = (data) => {
  return opts({
    method: 'put',
    url: '/admin',
    data
  })
}
export const apiPutAdminPwd = (data) => {
  return opts({
    method: 'put',
    url: '/admin/setpwd',
    data
  })
}

/* --- 分类 api --- */
// 获取某页所有分类
export const apiGetCategoriesByPage = (page) => {
  return opts({
    method: 'get',
    url: '/category_page/' + page
  })
}
// 获取某个分类所有文章
export const apiGetArticlesFromCate = (pageRequest) => {
  return opts({
    method: 'get',
    url: '/category/' + pageRequest.id + '/' + pageRequest.page
  })
}
// 获取某个分类title
export const apiGetCategoryTitle = (id) => {
  return opts({
    method: 'get',
    url: '/category_name/' + id
  })
}
// 获取所有分类id和title
export const apiGetCategories = () => {
  return opts({
    method: 'get',
    url: '/categories'
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

/* --- 文章 api --- */
// 获取首页最新修改五篇文章
export const apiGetRecentArticles = () => {
  return opts({
    method: 'get',
    url: '/articles_recent'
  })
}
// 分页获取文章
export const apiGetArticles = (page) => {
  return opts({
    method: 'get',
    url: '/article_page/' + page
  })
}
// 获取一篇文章内容
export const apiGetArticle = (id) => {
  return opts({
    method: 'get',
    url: '/article/' + id
  })
}
// 添加文章
export const apiAddArticle = (data) => {
  return opts({
    method: 'post',
    url: '/article',
    data
  })
}
// 修改文章
export const apiPutArticle = (data) => {
  return opts({
    method: 'put',
    url: '/article',
    data
  })
}
// 删除文章
export const apiDeleteArticle = (data) => {
  return opts({
    method: 'delete',
    url: '/article',
    data
  })
}