<template>
  <div class="navbar" :style="{zIndex: zindex}">
    <div class="navbar-main">
      <div class="navbar-items">
        <div class="navbar-items-logo">MITTACY</div>
        <nav-item
          v-for="item in navItems"
          :content="item.content"
          :icon="item.icon"
          :route="item.route"
          :key="item.content"
        ></nav-item>
      </div>
      <div class="navbar-login" :class="{hideLoginButton: this.$store.state.adminStatus}" @click="showLogin">
        <i class="iconfont icon-jiqiren"></i>登录
      </div>
      <div class="navbar-login" :class="{hideLoginButton: !this.$store.state.adminStatus}">
        <div @click="exitLogin">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
import navItems from "@/menu";

export default {
  name: "navbar",
  data() {
    return {
      navItems,
      zindex: 1000
    };
  },
  components: {
    NavItem
  },
  methods: {
    showLogin() {
      this.$store.dispatch('changeLoginFormStatus', true)
    },
    exitLogin() {
      this.$store.dispatch('changeAdminStatus', false)
    },
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  min-width: 1140px;
  border-bottom: 1px solid #dcdee2;
  position: relative;
}
.navbar-main {
  display: -webkit-flex; /* Safari */
  display: flex;
  width: 1140px;
  height: 60px;
  margin: 0 auto;
}
.navbar-items {
  display: -webkit-flex; /* Safari */
  display: flex;
  /* flex-direction: row;
    flex-wrap: nowrap; */
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: calc(100% - 80px);
}
.navbar-items-logo {
  display: -webkit-flex; /* Safari */
  display: flex;
  height: inherit;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: serif;
  font-weight: bold;
  font-size: 24px;
  color: #333;
}
.navbar-items-logo:hover,
.navbar-login:hover {
  color: #2d8cf0;
}
.iconfont {
  margin-right: 6px;
  font-size: 16px;
}

.navbar-login {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #515a6e;
  width: 80px;
  height: 100%;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  justify-content: center;
}
.hideLoginButton {
  display: none;
}
</style>