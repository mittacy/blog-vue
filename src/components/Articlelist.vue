<template>
<div class="article">
  <div class="cate-title" :class="{divHidden: !this.fromCategory}">
    <i class="iconfont icon-biaoqian"></i>
    {{ this.$route.query.title }}
  </div>
  <div class="article-lists">
    <router-link v-for="article in articles" class="article-list" :key="article.title" :to="turnToArticle(article.id)">
      <div class="article-list-title">
        <div>
          <i class="iconfont icon-16"></i>
          {{article.title}}
        </div>
        <router-link class="article-list-edit" :class="{divHidden: !$store.state.adminStatus}" :to="{name:'articleEdit', query:{id: article.id}}">编辑</router-link>
      </div>
      <div class="article-list-info">
        <div class="article-list-info-text">
          <div style="marginRight: 4px">发表于{{article.created_at}} -</div>
          <div style="marginRight: 4px" :class="{divHidden: article.updated_at == ''}">最后修改于{{article.updated_at}} -</div>
          <div>{{article.views}}次阅读</div>
        </div>
        <div class="article-list-delete" :class="{divHidden: !$store.state.adminStatus}" @click.prevent="deleteArticle(article.id)">删除</div>
      </div>
    </router-link>
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
import {apiGetArticles, apiGetArticlesFromCate, apiDeleteArticle} from '@/request/api';
export default {
  data () {
    return {
      articles: [],
      articleNum: 0,
      pageNum: 0,
      currentPage: 0,
      leftArrowIsAble: false,
      rightArrowIsAble: false,
      updatedAt: '',
      pageRequest: {
        id: 0,
        page: 0
      }
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
        this.pageRequest.id = this.categoryID
        response = await apiGetArticlesFromCate(this.pageRequest)
      }
      if (response.status != 200) {
        return
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
      let response = {}
      if (!this.fromCategory) {
        response = await apiGetArticles(page)
      } else {
        this.pageRequest.page = page
        response = await apiGetArticlesFromCate(this.pageRequest)
      }
      if (response.status != 200) {
        return
      }
      const result = response.data.data
      this.articles = result.articles
      this.currentPage = page
      this.isArrowAble()
    },
    isArrowAble() {
      this.leftArrowIsAble = this.currentPage > 0 ? true : false
      this.rightArrowIsAble = this.currentPage < this.pageNum-1 ? true : false
    },
    turnToArticle(articleID) {
      return {
        name: 'article',
        params: {
          id: articleID
        }
      }
    },
    async deleteArticle(articleID) {
      if(confirm("确实要删除？")) {
        const response = await apiDeleteArticle({id: articleID})
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        if (response.status == 200) {
          this.initArticle()
        }
      }
    }
  },
}
</script>

<style scoped>
@media (max-width: 800px) {
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
  .article-list-info {
    padding: 10px 0;
    font-size: 12px;
    text-align: left;
    color: #999;
    letter-spacing: 1px;
  }
  .article-list-title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8eaec;
    font-size: 14px;
    color: #17233d;
    font-weight: 550;
  }
}
@media (min-width: 800px) {
  .article-list-info {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #999;
    letter-spacing: 1px;
  }
  .article-list-info-text {
    display: flex;
  }
  .article-list-title {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8eaec;
    font-size: 14px;
    color: #17233d;
    font-weight: 550;
  }
  .article-list-edit,
  .article-list-delete {
    width: 50px;
    height: 30px;
    line-height: 30px;
    margin-right: 5px;
    border: 1px solid #e8eaec;
    border-radius: 4px;
    color: #17233d;
    font-size: 14px;
    font-weight: 550;
    transition: all 0.2s ease-in;
  }
  .article-list-edit:hover {
    color: #fff;
    background-color: #2d8cf0;
  }
  .article-list-delete:hover {
    color: #fff;
    background-color: red;
  }
}
.divHidden {
  display: none!important;
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
.cate-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  font-weight: 200;
  margin-left: 5px;
  margin-bottom: 20px;
  color: #515a6e;
}
.article-list-title i {
  margin-right: 5px;
}
.icon-biaoqian {
  margin-right: 5px;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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