<template>
<div class="article">
  <div class="article-lists">
    <div v-for="article in articles" :key="article.created_at" class="article-list">
      <div class="article-list-title">
        <i class="iconfont icon-16"></i>
        {{article.title}}
      </div>
      <div class="article-list-info">
        <div>发表于{{article.created_at.slice(0,10)}} - {{article.views}}次阅读 - {{article.assists}}人点赞</div>
      </div>
    </div>
  </div>
  <div class="page">
    <span class="page-count">共 {{articleNum}} 条</span>
    <div class="page-arrow" :class="leftArrowIsAble === true ? 'page-arrow-able' : 'page-arrow-disabled'" @click="changePage(currentPage-1)">
      <i class="iconfont icon-icon_right_arrow"></i>
    </div>
    <div v-for="num in pageNum"
      :key="num"
      class="page-number"
      :class="{'page-active': currentPage === num-1}"
      @click="changePage(num-1)"
      >
      {{num}}
    </div>
    <div class="page-arrow" :class="rightArrowIsAble === true ? 'page-arrow-able' : 'page-arrow-disabled'" @click="changePage(currentPage+1)">
      <i class="iconfont icon-icon_left_arrow"></i>
    </div>
  </div>
</div>
</template>

<script>
import {apiGetArticles, apiGetArticlesFromCate} from '@/request/api';
export default {
  data () {
    return {
      articles: [],
      articleNum: 0,
      pageNum: 0,
      currentPage: 0,
      leftArrowIsAble: false,
      rightArrowIsAble: false,
    }
  },
  created () {
    this.initArticle()
  },
  props: {
    categoryID: {
      type: [String, Number],
      default: '1'
    },
    fromCategory: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async initArticle() {
      let response = {}
      if (!this.fromCategory) {
        response = await apiGetArticles(0)
      } else {
        response = await apiGetArticlesFromCate(this.categoryID)
      }
      const result = response.data.data
      this.articleNum = result.articleCount
      this.articles = result.articles
      this.currentPage = 0
      if (this.articleNum%10 == 0) {
        this.pageNum = parseInt(this.articleNum/10)
      } else {
        this.pageNum = parseInt(this.articleNum/10)+1
      }
      this.rightArrowIsAble = this.currentPage < this.pageNum-1 ? true :false
    },
    async changePage(page) {
      if (page === this.currentPage) return
      const response = await apiGetArticles(page)
      const result = response.data.data
      this.articles = result.articles
      this.currentPage = page
      this.isArrowAble()
    },
    isArrowAble() {
      this.leftArrowIsAble = this.currentPage > 0 ? true : false
      this.rightArrowIsAble = this.currentPage < this.pageNum-1 ? true : false
    },
  },
}
</script>

<style scoped>
.article {
  width: 75%;
  opacity: 1;
  transition: all .2s ease;
}
.article-lists {
  display: flex;
  flex-direction: column;
}
.article-list {
  display: flex;
  flex-direction: column;
  border: 1px solid #e8eaec;
  border-radius: 4px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
}
.article-list:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}
.article-list-title {
  height: 50px;
  display: flex;
  justify-content: left;
  align-items: center;
  border-bottom: 1px solid #e8eaec;
  font-size: 14px;
  color: #17233d;
  font-weight: 550;
}
.article-list-title>i {
  margin-right: 5px;
}
.article-list-info {
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 12px;
  color: #999;
  letter-spacing: 1px;
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