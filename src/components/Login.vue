<template>
<div class="login" :class="{hideLogin: !this.$store.state.loginFormStatus}" @mousewheel.prevent>
  <div class="login-background" @click="hideLogin"></div>
  <div class="login-main" :class="{hideLogin: !this.$store.state.loginFormStatus}">
    <div class="login-main-close" @click="hideLogin">
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="login-main-title">
      <span>登录</span>
    </div>
    <div class="login-main-form">
      <div class="login-main-form-inputs">
        <i class="iconfont login-main-form-icon icon-jiqiren"></i>
        <input class="login-main-form-input" type="text" placeholder="输入用户名" v-model="username">
      </div>
      <div class="login-main-form-inputs">
        <i class="iconfont login-main-form-icon icon-mima"></i>
        <input class="login-main-form-input" type="password" placeholder="输入密码" v-model="password">
      </div>
    </div>
    <div class="login-main-button">
      <div class="login-button" :class="{'button-disClick': disClick}" @click="checkPassword">登 录</div>
    </div>
  </div>
</div>
</template>

<script>
import {apiCheckAdmin} from '@/request/api';
export default {
  data () {
    return {
      username: '',
      password: '',
      disClick: false
    }
  },
  methods: {
    hideLogin() {
      this.$store.dispatch('changeLoginFormStatus', false)
    },
    async checkPassword() {
      this.disClick = true
      window.setTimeout(() => {
        this.disClick = false
      }, 1000)
      if (!this.username) {
        this.$store.dispatch('changeTipsMsg', '请输入用户名')
        return
      } else if (!this.password) {
        this.$store.dispatch('changeTipsMsg', '请输入密码')
        return
      }
      let requestObj = {
        name: this.username,
        password: this.password
      }
      const response = await apiCheckAdmin(requestObj)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        return
      }
      // 修改 loginStatus
      this.$store.dispatch('changeAdminStatus', true)
      this.$store.dispatch('changeLoginFormStatus', false)
      this.$store.dispatch('changeTipsMsg', response.data.msg)
      // 保存 token
      sessionStorage.setItem('adminToken', response.data.data)
    }
  }
}
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1500;
  opacity: 1;
  transition: all .5s ease-in-out;
}
.login-background {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 500;
  background-color: rgba(255,255,255,.6);
}
.hideLogin {
  z-index: 500!important;
  opacity: 0;
}
.login-main {
  position: fixed;
  top: 50%;
  left: 50%;
  transform:translate(-200px, -220px);
  width: 400px;
  height: 245px;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  z-index: 1500;
  transition: all .3s ease-in-out;
}
.login-main-close {
  position: absolute;
  right: 10px;
  top: 13px;
  overflow: hidden;
  cursor: pointer;
  font-size: 12px;
  color: #999;
  -webkit-transition: color .2s ease;
  transition: color .2s ease;
}
.login-main-close:hover {
  color: #444;
}
.login-main-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: 50px;
  font-size: 14px;
  color: #2d8cf0;
  border-bottom: 1px solid #e8eaec;
}
.login-main-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 135px;
  border-bottom: 1px solid #e8eaec;
}
.login-main-form-inputs {
  display: flex;
  width: 368px;
  height: 32px;
  border: 1px solid #dcdee2;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
}
.login-main-form-icon {
  padding: 8.5px 7px;
  font-weight: 500;
  font-size: 14px;
  color: #515a6e;
  text-align: center;
  background-color: #f8f8f9;
  border-right: 1px solid #dcdee2;
  border-radius: 4px;
}
.login-main-form-input {
  width: 300px;
  height: inherit;
  border: 0;
  padding-left: 5px;
}
.login-main-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: 60px;
}
.login-button {
  width: 364px;
  height: 36px;
  line-height: 36px;
  color: #fff;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  border-color: #2d8cf0;
  background-color: #2d8cf0;
  cursor: pointer;
}
.login-button:hover {
  background-color: #57a3f3;
  border-color: #57a3f3;
}
.button-disClick {
  pointer-events: none;
}
</style>