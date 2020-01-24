<template>
  <div class="navbar">
    <div class="navbar-main">
      <div class="navbar-items">
        <div class="navbar-items-logo">MITTACY</div>
        <NavItem
          v-for="item in navItems"
          :content="item.content"
          :icon="item.icon"
          :url="item.url"
          :isActive="currentUrl === item.url"
          :key="item.content"
          @click.native="currentUrl = item.url"
        ></NavItem>
      </div>
      <div class="navbar-login">
        <a target="_self">
          <i class="iconfont icon-geren"></i>登录
        </a>
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
      currentUrl: '/'
    };
  },
  components: {
    NavItem
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  min-width: 1140px;
  border-bottom: 1px solid #dcdee2;
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
  font-size: 14px;
  color: #515a6e;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.navbar-items-logo {
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
}
</style>