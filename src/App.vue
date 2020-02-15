<template>
  <div id="app">
    <Tips/>
    <Top style="zIndex: 1500"/>
    <Login class="divHide"/>
    <Navbar style="zIndex: 1200"/>
    <div class="content-warp">
      <div class="content"><router-view></router-view></div>
    </div>
    <Footer style="zIndex: 1000;"/>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Navbar from "@/components/Navbar";
import Login from "@/components/Login";
import {apiverifyAdmin} from "@/request/api";
import Footer from '@/components/Footer';
import Tips from '@/components/Tips';

export default {
  name: "app",
  created() {
    // 找回activeItem
    if (sessionStorage.getItem('activeItem')) {
      this.$store.dispatch('changeActiveItem', sessionStorage.getItem('activeItem'))
    }
    // 验证是否有权限，若有改变 adminStatus
    this.verifyAdmin()
  },
  data() {
    return {
      minHeight: 600,
    }
  },
  components: {
    Top,
    Navbar,
    Login,
    Footer,
    Tips
  },
  methods: {
    async verifyAdmin() {
      const response = await apiverifyAdmin()
      if (response.status == 200) {
        this.$store.state.adminStatus = true
      }
    },
  }
};
</script>

<style>
#app {
  position: relative;
  font: normal 100% Helvetica, Arial, sans-serif;
  width: 100%;
  min-height: 800px;
  text-align: center;
  z-index: 2000;
}
@media (max-width: 800px) {
  .divHide {
    display: none!important;
  }
  .content-warp {
    position: relative;
    width: 100%;
    min-height: 650px;
    z-index: 1000;
    padding-bottom: 80px;
  }
  .content {
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
  }
}
@media (min-width: 800px) {
  .content-warp {
    position: relative;
    width: 100%;
    min-width: 1200px;
    min-height: 650px;
    z-index: 1000;
    padding-bottom: 80px;
  }
  .content {
    width: 80%;
    max-width: 1600px;
    margin: 0 auto;
    padding-top: 20px;
  }
}
</style>
