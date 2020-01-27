<template>
  <div id="app">
    <Navbar :zindex="showRank[0]" :loginStatus="loginStatus" @changeLoginForm="changeLoginForm"/>
    <Login :bgIndex="showRank[1]" :loginIndex="showRank[2]" :isHideLogin="isHideLogin" @changeLoginForm="changeLoginForm"/>
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
      showRank: [1000, 1100, 1200],
      isHideLogin: false,
      loginStatus: false
    }
  },
  components: {
    Navbar,
    Login
  },
  methods: {
    changeLoginForm(status) {
      this.isHideLogin = status
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
