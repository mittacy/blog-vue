<template>
  <router-link class="navbar-items-item" :to="route" >
    <i class="iconfont" :class="icon"></i>
    {{content}}
  </router-link>
</template>

<script>
// import navItems from "@/menu";
export default {
  name: "nav-item",
  props: {
    route: {
      type: String,
      default: "_self"
    },
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  }
};
</script>
<style scoped>
.navbar-items-item {
  display: -webkit-flex; /* Safari */
  display: flex;
  height: inherit;
  font-size: 14px;
  color: #515a6e;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 2px solid #fff;
}
.navbar-items-item:hover {
  color: #2d8cf0;
  border-bottom: 2px solid #2d8cf0;
}
.iconfont {
  margin-right: 6px;
  font-size: 16px;
}
.router-link-exact-active {
  color: #2d8cf0;
  border-bottom: 2px solid #2d8cf0;
}
</style>