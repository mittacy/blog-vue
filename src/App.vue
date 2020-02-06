<template>
  <div id="app">
    <div class="tips-box" :class="{msgActive: $store.state.tipsBox}">{{$store.state.tipsMsg}}</div>
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
.tips-box {
  position: absolute;
  top: 50px;
  left: 700px;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  box-shadow: 0 4px 12px #2d8cf0;
  transition: all .7s ease-in;
  z-index: 500;
  opacity: 0;
}
.msgActive {
  top: 70px;
  opacity: 1;
  z-index: 2000;
}
</style>
