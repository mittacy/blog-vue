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
    }
  }
})

export default store