<template>
  <div id="app">
    <Tips/>
    <Top/>
    <Navbar/>
    <Login/>
    <router-view style="minHeight: 600px"></router-view>
    <Footer/>
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
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font: normal 100% Helvetica, Arial, sans-serif;
  width: 100%;
  text-align: center;
  position: relative;
}
</style>
