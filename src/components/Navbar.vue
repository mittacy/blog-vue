<template>
  <div class="navbar">
    <div class="navbar-main">
      <div class="navbar-items">
        <div class="navbar-items-logo hideClass">MITTACY</div>
        <nav-item
          v-for="item in navItems"
          :content="item.content"
          :icon="item.icon"
          :route="item.route"
          :key="item.content"
          :class="{'item-active': $store.state.activeItem === item.route}"
          @click.native="$store.dispatch('changeActiveItem', item.route)"
        ></nav-item>
      </div>
      <div class="navbar-login navbar-login-button hideClass" :class="{hideLoginButton: $store.state.adminStatus}" @click="showLogin">
        登录<i class="iconfont icon-jiqiren"></i>
      </div>
      <div class="navbar-login hideClass" :class="{hideLoginButton: !$store.state.adminStatus}">
        <div class="navbar-login-exit" @click="exitLogin">退出</div>
        <div class="navbar-login-controls-wrap">
          <div class="navbar-login-controls">
            <div class="navbar-login-control-title">管理</div>
            <router-link
              v-for="item in manageItems"
              class="navbar-login-control"
              :key="item.content"
              :to="item.route"
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
      sessionStorage.removeItem('adminToken')
      this.$store.dispatch('changeAdminStatus', false)
    },
  }
};
</script>

<style scoped>
.item-active {
  color: #2d8cf0;
  border-bottom: 2px solid #2d8cf0;
}
@media (max-width: 800px) {
  .hideClass {
    display: none;
  }
  .navbar {
    width: 100%;
    border-bottom: 1px solid #dcdee2;
    position: relative;
  }
  .navbar-main {
    display: flex;
    justify-content: space-between;
    height: 60px;
    margin: 0 auto;
  }
  .navbar-items {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;
  }
}
@media (min-width: 800px) {
  .navbar {
    width: 100%;
    min-width: 1200px;
    border-bottom: 1px solid #dcdee2;
    position: relative;
  }
  .navbar-main {
    display: flex;
    justify-content: space-between;
    width: 80%;
    max-width: 1600px;
    height: 60px;
    margin: 0 auto;
  }
  .navbar-items {
    display: flex;
    /* flex-direction: row;
      flex-wrap: nowrap; */
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: calc(100% - 200px);
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
  .navbar-login-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #515a6e;
    width: 80px;
    height: 100%;
    padding-right: 20px;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
  }
  .navbar-items-logo:hover,
  .navbar-login-button:hover,
  .navbar-login-exit:hover {
    color: #2d8cf0;
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
  .hideLoginButton {
    display: none!important;
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
    height: 154px;
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
  .iconfont {
    margin-right: 6px;
    font-size: 16px;
  }
}
</style>