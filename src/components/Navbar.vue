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
      <div class="navbar-login-button" :class="{hideLoginButton: this.$store.state.adminStatus}" @click="showLogin">
        <i class="iconfont icon-jiqiren"></i>登录
      </div>
      <div class="navbar-login" :class="{hideLoginButton: !this.$store.state.adminStatus}">
        <div class="navbar-login-exit" @click="exitLogin">退出</div>
        <div class="navbar-login-controls-wrap">
          <div class="navbar-login-controls">
            <div class="navbar-login-control-title">管理</div>
            <router-link
              v-for="item in manageItems"
              class="navbar-login-control"
              :key="item.content"
              :to="item.url"
            >{{item.content}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/NavItem";
import navItems from "@/menu";
import manageItems from "@/manage";

export default {
  name: "navbar",
  data() {
    return {
      navItems,
      manageItems,
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
  width: calc(100% - 200px);
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
.navbar-login-exit:hover {
  color: #2d8cf0;
}
.iconfont {
  margin-right: 6px;
  font-size: 16px;
}

.navbar-login-button {
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
.navbar-login {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: #515a6e;
  width: 200px;
  height: 100%;
  font-size: 14px;
}
.navbar-login-exit {
  width: 50px;
  cursor: pointer;
}
.navbar-login-controls-wrap {
  height: 20px;
  width: 80px;
  position: relative;
}
.navbar-login-controls {
  position: absolute;
  top: -5px;
  width: 80px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #515a6e;
  background-color: #fff;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  overflow: hidden;
  transition: all .5s ease-in-out;
}
.navbar-login-controls:hover {
  height: 120px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
.navbar-login-control-title,
.navbar-login-control {
  width: 100%;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  color: #515a6e;
  border-bottom: 1px solid #dcdee2;
}
.navbar-login-control:hover {
  background-color: #2d8cf0;
  color: #fff;
}
</style>