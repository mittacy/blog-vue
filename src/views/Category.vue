<template>
<div class="content">
  <div class="cate">
    <div class="cate-lists">
      <div v-for="cate in categories" :key="cate.title" class="cate-list">
        <div class="cate-list-left">
          <i class="iconfont icon-biaoqian"></i>
          {{ cate.title }}
        </div>
        <div class="cate-list-right">
          {{ cate.article_count }}篇
        </div>
      </div>
    </div>
    <div class="page">
      <span class="page-count">共 {{cateNumber}} 条</span>
      <div class="page-arrow" :class="leftArrowIsAble === true ? 'page-arrow-able' : 'page-arrow-disabled'" @click="changeCategoryPage(currentPage-1)">
        <i class="iconfont icon-icon_right_arrow"></i>
      </div>
      <div v-for="num in pageNumber"
        :key="num"
        class="page-number"
        :class="{'page-active': currentPage === num-1}"
        @click="changePage(num)"
        >
        {{num}}
      </div>
      <div class="page-arrow" :class="rightArrowIsAble === true ? 'page-arrow-able' : 'page-arrow-disabled'" @click="changeCategoryPage(currentPage+1)">
        <i class="iconfont icon-icon_left_arrow"></i>
      </div>
    </div>
  </div>
  <Intro/>
</div>
</template>

<script>
import Intro from '@/components/Intro';
import {apiGetCategories} from '@/request/api';

export default {
  data () {
    return {
      categories: [],
      cateNumber: 0,
      pageNumber: 0,
      currentPage: 0,
      leftArrowIsAble: false,
      rightArrowIsAble: false,
    }
  },
  components: {
    Intro,
  },
  async created () {
    this.initCategory()
  },
  methods: {
    async initCategory() {
      let result = await apiGetCategories(0)
      this.cateNumber = result.data.categoryCount
      this.categories = result.data.categories
      this.currentPage = 0
      if (this.cateNumber%10 === 0) {
        this.pageNumber = parseInt(this.cateNumber/10)
      } else {
        this.pageNumber = parseInt(this.cateNumber/10)+1
      }
      this.rightArrowIsAble = this.currentPage < this.pageNumber ? true : false
    },
    async changeCategoryPage(page) {
      let result = await apiGetCategories(page)
      this.categories = result.data.categories
      this.currentPage = page
      this.isArrowAble()
    },
    isArrowAble() {
      this.leftArrowIsAble = this.currentPage > 0 ? true : false
      this.rightArrowIsAble = this.currentPage < this.pageNumber ? true : false
    },
  }
}
</script>

<style scoped>
.content {
  display: flex;
  width: 1140px;
  margin: 0 auto;
  padding-top: 20px;
}
.cate {
  width: 75%;
}
.cate-lists {
  display: flex;
  flex-direction: column;
}
.cate-list {
  display: flex;
  justify-content: space-between;
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
.cate-list-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cate-list-right {
  margin-right: 20px;
}
.cate-list-left>i {
  margin-right: 7px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
.page-count {
  font-size: 12px;
  margin-right: 20px;
  color: #515a6e;
}
.page-arrow, .page-number {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 4px;
  cursor: pointer;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  font-family: Arial;
  color: #ccc;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
.page-arrow-able:hover, .page-number:hover {
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
}
.page-active {
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
}
.page-arrow-disabled {
  pointer-events: none;
}
</style>