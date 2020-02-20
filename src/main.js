import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import '@/assets/css/init.css'
import directives from './directive'

Vue.config.productionTip = false
// 引入自定义指令
Object.keys(directives).forEach((directiveName) => {
  Vue.directive(directiveName, directives[directiveName])
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
