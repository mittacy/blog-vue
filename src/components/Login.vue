<template>
<div class="login" :class="{hideLogin: !this.$store.state.loginFormStatus}">
  <div class="login-background" :style="{zIndex: bgIndex}"  @click="hideLogin"></div>
  <div class="login-main" :style="{zIndex: loginIndex}">
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
      <div class="login-button" @click="checkPassword">登 录</div>
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
      bgIndex: 1100,
      loginIndex: 1200,
    }
  },
  methods: {
    hideLogin() {
      this.$store.dispatch('changeLoginFormStatus', false)
    },
    async checkPassword() {
      if (!this.username) {
        alert("请输入用户名")
        return
      } else if (!this.password) {
        alert("请输入密码")
        return
      }
      let requestObj = {
        name: this.username,
        password: this.password
      }
      const response = await apiCheckAdmin(requestObj)
      const result = response.data
      if (response.status == 200) {
        const token = result.data
        // 修改 loginStatus
        this.$store.dispatch('changeAdminStatus', true)
        this.$store.dispatch('changeLoginFormStatus', false)
        // 保存 token
        sessionStorage.setItem('adminToken', token)
      } else {
        if (result.msg === "Password error") {
          alert("Password Error")
        } else if (result.msg === "Name error") {
          alert("Admin Error")
        }
      }
    }
  }
}
</script>

<style scoped>
.login {
  position: absolute;
  top: -60px;
  width: inherit;
  height: calc(100vh + 60px);
  transition: all .3s ease-in-out;
  display:flex;
  justify-content:center;
  align-items:center;
  opacity: 1;
}
.login-background {
  position: absolute;
  top: 0;
  width: inherit;
  height: inherit;
  background-color: rgba(55,55,55,.6);
}
.hideLogin {
  height: 0;
  overflow: hidden;
}
.login-main {
  position: relative;
  width: 400px;
  height: 245px;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
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
  padding: 6px 7px;
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
</style>