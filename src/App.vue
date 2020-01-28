<template>
  <div id="app">
    <Navbar :loginStatus="loginStatus" @changeLoginFormStatus="changeLoginFormStatus" @changeLoginStatus="changeLoginStatus"/>
    <Login :loginFormStatus="loginFormStatus" @changeLoginFormStatus="changeLoginFormStatus" @changeLoginStatus="changeLoginStatus"/>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";

export default {
  name: "app",
  data () {
    return {
      loginFormStatus: true,  // true为隐藏
      loginStatus: false
    }
  },
  components: {
    Navbar,
    Login
  },
  methods: {
    changeLoginFormStatus(status) {
      this.loginFormStatus = status
    },
    changeLoginStatus(status) {
      if (!status) {
        sessionStorage.removeItem('blog')
      }
      this.loginStatus = status
    }
  }
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font: normal 100% Helvetica, Arial, sans-serif;
  width: 100%;
  text-align: center;
  position: relative;
}
#content {
  width: inherit;
  padding-top: 20px;
}
</style>
