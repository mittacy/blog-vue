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
import {apiverifyAdmin} from "@/request/api";

export default {
  name: "app",
  created() {
    // 验证是否有权限，若有改变 adminStatus
    this.verifyAdmin()
  },
  components: {
    Navbar,
    Login
  },
  methods: {
    async verifyAdmin() {
      const response = await apiverifyAdmin()
      if (response.status == 200) {
        this.$store.state.adminStatus = true
      }
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
</style>
