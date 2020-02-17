<template>
  <div class="main">
    <div class="main-content hideClass">
      <div class="title"><i class="iconfont icon-update"></i>最近更新</div>
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
    </div>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import {apiGetRecentArticles, apiDeleteArticle} from '@/request/api'
export default {
  created () {
    if (this.$store.state.activeItem != '/') {
      this.$store.dispatch('changeActiveItem', '/')
    }
    this.initArticles()
  },
  data() {
    return {
      articles: []
    }
  },
  components: {
    Intro,
  },
  methods: {
    async initArticles() {
      const res = await apiGetRecentArticles()
      if (res.status != 200) {
        this.$store.dispatch('changeTipsMsg', res.data.msg)
        return
      }
      this.articles = res.data.data
    },
    turnToArticle(id) {
      return {
        name: 'article',
        params: {
          id
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
  }
}
</script>

<style scoped>
@media (max-width: 800px) {
  .hideClass {
    display: none;
  }
  .main {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 800px) {
  .main {
    display: flex;
    justify-content: space-between;
  }
  .main-content {
    width: calc(100% - 292px);
  }
  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 22px;
    font-weight: 200;
    margin-left: 5px;
    margin-bottom: 20px;
    color: #515a6e;
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
  .article-list-title i {
    margin-right: 5px;
  }
  .icon-update {
    margin-right: 5px;
  }
}
.divHidden {
  display: none!important;
}
</style>