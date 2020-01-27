import opts from './http'
// function checkAdmin(params) {
//   return post('/admin', params)
// }
// function getAdmin(params) {
//   return get('/admin', params)
// }
export const checkAdmin = (data) => { return opts({method: 'post', url: '/admin', data}) }