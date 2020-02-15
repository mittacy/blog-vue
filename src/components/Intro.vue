<template>
<div class="intro">
  <div class="intro-img">
    <img src="http://static.mittacy.com/intro.png">
  </div>
  <div class="intro-information">
    <div class="intro-information-name">
      <div>{{result.name}}</div>
      <div class="intro-information-text">Just Do It</div>
    </div>
    <div class="intro-information-links">
      <a class="intro-information-link" :href="result.github" target="_blank"><i class="iconfont icon-github"></i></a>
      <a class="intro-information-link" :href="result.bilibili" target="_black"><i class="iconfont icon-CN_bilibiliB"></i></a>
      <a class="intro-information-link" :href="`mailto:${result.mail}`" target="_blank"><i class="iconfont icon-mail"></i></a>
    </div>
    <div class="intro-views">访问人数: {{result.views}}</div>
  </div>
</div>
</template>

<script>
import {apiGetAdminInformation} from '@/request/api';
export default {
  data () {
    return {
      result: {}
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
@media (max-width: 800px) {
  .intro {
    width: 100%;
    height: 400px;
  }
  .intro-information {
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 800px) {
  .intro {
    width: 280px;
    height: 400px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    transition: all .2s ease-in-out;
  }
  .intro-information {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}
.intro:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
.intro-img {
  height: 280px;
}
.intro-img>img {
  border-radius: 4px 4px 0 0;
}
.intro-information-name, .intro-information-links {
  margin-bottom: 4px;
}
.intro-information-name {
  display: flex;
  font-size: 22px;
  font-weight: 900;
  color: #515a6e;
}
.intro-information-links {
  display: flex;
  align-items: center;
  height: 40px;
}
.intro-information-link {
  margin-right: 10px;
}
.intro-information-link>.iconfont{
  font-size: 25px;
  color: #585858;
}
.intro-views {
  text-align: left;
  font-size: 13px;
  color: #515a6e;
}
.intro-information-text {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  -webkit-font-smoothing: antialiased;
}
</style>