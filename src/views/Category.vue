<template>
  <div class="cate">
    <div class="cate-lists">
      <div v-for="cate in categories" :key="cate" class="cate-list">
        <i class="iconfont icon-biaoqian"></i>
        {{ cate }}
      </div>
    </div>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro';

export default {
  data () {
    return {
      categories: ["Golang", "JavaScript"]
    }
  },
  components: {
    Intro,
  }
}
</script>

<style scoped>
.cate {
  display: -webkit-box;
  display: flex;
  width: 1140px;
  margin: 0 auto;
}
.cate-lists {
  display: flex;
  flex-direction: column;
  width: 75%;
}
.cate-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid #e8eaec;
  border-radius: 4px;
  cursor: pointer;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  font-size: 14px;
  color: #17233d;
  font-weight: 550;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
}
.cate-list:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
.cate-list>i {
  margin-right: 7px;
}
</style>