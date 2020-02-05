import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建Vuex实例
const store = new Vuex.Store({
  state: {
    adminStatus: false,
    loginFormStatus: false
  },
  mutations: {
    changeAdminStatusFunc(state, bool) {
      state.adminStatus = bool
    },
    changeLoginFormStatusFunc(state, bool) {
      state.loginFormStatus = bool
    }
  },
  actions: {
    changeAdminStatus(context, bool) {
      context.commit('changeAdminStatusFunc', bool)
    },
    changeLoginFormStatus(context, bool) {
      context.commit('changeLoginFormStatusFunc', bool)
    }
  }
})

export default store