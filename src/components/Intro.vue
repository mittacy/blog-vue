<template>
<div class="intro">
  <div class="intro-me">
    <div class="intro-me-img">
      <img src="/intro.png">
    </div>
    <div class="intro-me-information">
      <div class="intro-me-information-name">
        <div>{{result.name}}</div>
        <div class="intro-me-information-text">Just Do It</div>
      </div>
      <div class="intro-me-information-links">
        <a class="intro-me-information-link" :href="result.github" target="_blank"><i class="iconfont icon-github"></i></a>
        <a class="intro-me-information-link" :href="result.bilibili" target="_black"><i class="iconfont icon-CN_bilibiliB"></i></a>
        <a class="intro-me-information-link" :href="`mailto:${result.mail}`" target="_blank"><i class="iconfont icon-mail"></i></a>
      </div>
      <div class="intro-me-views">访问人数:</div>
    </div>
  </div>
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
    this.getAdminInformation()
  },
  methods: {
    async getAdminInformation() {
      const response = await apiGetAdminInformation()
      if (response.status != 200) {
        return
      }
      this.result = response.data.data
    }
  }
}
</script>

<style scoped>
.intro {
  width: 24%;
  height: inherit;
  margin-left: 1%;
}
.intro-me {
  width: 100%;
  height: 400px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  transition: all .2s ease-in-out;
}
.intro-me:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
.intro-me-img {
  width: 100%;
  height: 70%;
}
.intro-me-img>img {
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0 0;
}
.intro-me-information {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.intro-me-information-name, .intro-me-information-links {
  width: 100%;
  margin-bottom: 4px;
}
.intro-me-information-name {
  display: flex;
  
  font-size: 22px;
  font-weight: 900;
  color: #515a6e;
}
.intro-me-information-links {
  display: flex;
  align-items: center;
  height: 40px;
}
.intro-me-information-link {
  margin-right: 10px;
}
.intro-me-information-link>.iconfont{
  font-size: 25px;
  color: #585858;
}
.intro-me-views {
  text-align: left;
  font-size: 13px;
  color: #515a6e;
}
.intro-me-information-text {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  -webkit-font-smoothing: antialiased;
}
</style>