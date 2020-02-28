import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import '@/assets/css/init.css'
import directives from './directive'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
// 引入自定义指令
Object.keys(directives).forEach((directiveName) => {
  Vue.directive(directiveName, directives[directiveName])
})
// 进度条设置
NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from , next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的
  next();
})
router.afterEach(() => {  
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
