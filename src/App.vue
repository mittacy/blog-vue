<template>
  <div id="app">
    <Navbar :loginStatus="loginStatus" @changeLoginFormStatus="changeLoginFormStatus" @changeLoginStatus="changeLoginStatus"/>
    <Login :loginFormStatus="loginFormStatus" @changeLoginFormStatus="changeLoginFormStatus" @changeLoginStatus="changeLoginStatus"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Login from "./components/Login.vue";

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
  width: 100%;
  text-align: center;
  position: relative;
}
</style>
