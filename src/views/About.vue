<template>
<div class="about">
  <div class="about-title">About</div>
  <div class="about-author">
    作者
    <div class="about-name">{{result.cname}}(Mittacy Chen)</div>
  </div>
  <p class="abour-info">{{result.introduce}}</p>
  <p class="abour-info">github: <a :href="result.github" target="_blank">{{result.github}}</a></p>
  <p class="abour-info">个人邮箱: <a :href="`mailto:${result.mail}`" target="_blank">{{result.mail}}</a></p>
  <div class="about-author">博客相关</div>
  <p class="abour-info">前端: JavaScript & Vue.js</p>
  <p class="abour-info">后端: Golang & Gin</p>
  <p class="abour-info">数据库: Mysql & Redis缓存</p>
  <p class="abour-info">项目地址: <a href="https://github.com/mittacy/blog-gin" target="_blank">https://github.com/mittacy/blog-gin</a></p>
</div>
</template>

<script>
import {apiGetAdminInformation} from '@/request/api';

export default {
  data () {
    return {
      result: {
        type: Object
      }
    }
  },
  created() {
    if (this.$store.state.activeItem != '/about') {
      this.$store.dispatch('changeActiveItem', '/about')
    }
    this.getAdminInformation()
  },
  methods: {
    async getAdminInformation() {
      let response = await apiGetAdminInformation()
      if (response.status != 200) { return }
      this.result = response.data.data
    }
  }
}
</script>

<style scoped>
.about a {
  color: #0366d6;
}
.about-title {
  display: flex;
  justify-content: flex-start;
  font-size: 2.8em;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
}
.about-author {
  display: flex;
  justify-content: flex-start;
  font-size: 2em;
  font-weight: 450;
  margin-top: 20px;
  margin-bottom: 10px;
}
.about-name {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  height: 30px;
  line-height: 40px;
}
.abour-info {
  text-align: left;
  font-size: 1.3em;
  margin-bottom: 6px;
  font-weight: 300;
}
</style>