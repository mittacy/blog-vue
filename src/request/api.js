import {get, post, put, del} from './http'
function checkAdmin(params) {
  return post('/admin', params)
}
function getAdmin(params) {
  return get('/admin', params)
}
export {checkAdmin, getAdmin}