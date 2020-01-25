<template>
<div class="login" :class="{hideLogin: isHideLogin}">
  <div class="login-background" :style="{zIndex: bgIndex}"  @click="hideLogin"></div>
  <div class="login-main" :style="{zIndex: loginIndex}"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      
    }
  },
  props: {
    isHideLogin: {
      type: Boolean,
      default: true
    },
    loginIndex: {
      type: Number,
      default: 2000
    },
    bgIndex: {
      type: Number,
      default: 1500
    }
  },
  methods: {
    getMsg() {
      console.log("username: ", this.username)
      console.log("password: ", this.password)
    },
    hideLogin() {
      this.$emit('changeLoginStatus', true);
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
  background-color: #515a6e;
  opacity: 0.5;
}
.hideLogin {
  width: 0;
  height: 0;
}
.login-main {
  display: flex;
  width: 400px;
  height: 245px;
  background-color: #fff;
}
</style>