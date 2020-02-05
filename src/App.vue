<template>
  <div id="app">
    <Navbar/>
    <Login/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";

export default {
  name: "app",
  created() {
    // todo 测试是否有权限，若有改变 loginStatus
  },
  components: {
    Navbar,
    Login
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
</style>
