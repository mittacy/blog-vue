import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建Vuex实例
const store = new Vuex.Store({
  state: {
    adminStatus: false,
    loginFormStatus: false,
    tipsMsg: 'msg',
    tipsBox: false,
    page: 0
  },
  mutations: {
    changeAdminStatusFunc(state, bool) {
      console.log('改变登录状态为: ', bool)
      state.adminStatus = bool
    },
    changeLoginFormStatusFunc(state, bool) {
      state.loginFormStatus = bool
    },
    changeTipsMsgFunc(state, str) {
      state.tipsMsg = str
      state.tipsBox = true
      window.setTimeout(() => {
        state.tipsBox = false
      }, 1400)
    },
    changePageFunc(state, int) {
      state.page = int
    }
  },
  actions: {
    changeAdminStatus(context, bool) {
      context.commit('changeAdminStatusFunc', bool)
    },
    changeLoginFormStatus(context, bool) {
      context.commit('changeLoginFormStatusFunc', bool)
    },
    changeTipsMsg(context, str) {
      context.commit('changeTipsMsgFunc', str)
    },
    changePage(context, int) {
      context.commit('changePageFunc', int)
    }
  }
})

export default store