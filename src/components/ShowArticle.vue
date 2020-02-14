<template>
  <div class="article">
    <div class="set-default" :class="{divHidden: !$store.state.adminStatus}" @click="setDefault">设为主页默认文章</div>
    <div class="article-title">{{article.title}}</div>
    <div class="article-info">
      <div style="marginRight: 4px">发表: {{article.created_at}} -</div>
      <div style="marginRight: 4px" :class="{divHidden: article.updated_at == ''}">最后修改: {{article.updated_at === '' ? article.updated_at : article.created_at}} - </div>
      <div>归类于: 
        <router-link class="article-category" :to="turnToCategory()">{{category.title}}</router-link>
      </div>
    </div>
    <div class="article-content markdown-body" :class="{homeClass: isHome}" v-html="article.content">
      {{article.content}}
    </div>
    <div class="article-original" :class="{divHidden: !isHome}">
      <div class="article-original-more">…………</div>
      <router-link class="article-original-route" :to="turnToArticle(article.id)">阅读原文</router-link>
    </div>
  </div>
</template>

<script>
import '@/assets/css/github-markdown.css'
import {apiGetArticle, apiGetCategoryTitle, apiAddArticleView, apiPutHomeArticle, apiGetHomeArticleID} from '@/request/api'
export default {
  data() {
    return {
      article: {
        title: '',
        created_at: '',
        updated_at: '',
        category_id: 0,
        content: ''
      },
      category: {}
    }
  },
  props: {
    articleID: {
      type: Number,
      required: false,
      default: 0
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  async created() {
    if (this.isHome) {
      // home主页，请求获取默认主页文章
      let response = await apiGetHomeArticleID()
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        return
      }
      this.initArticle(response.data.data.homearticle)
    } else {
      this.initArticle(this.articleID)
    }
  },
  methods: {
    async initArticle(id) {
      let response = await apiGetArticle(id)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', '加载文章失败')
        return
      }
      this.article = response.data.data
      const md = require('markdown-it')()
      this.article.content = md.render(this.article.content)
      // todo 主页截断内容
      // if (this.isHome) {
      // }
      apiAddArticleView({id: this.articleID})
      response = await apiGetCategoryTitle(this.article.category_id)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        return
      }
      this.category = response.data.data
      return
    },
    turnToCategory() {
      return {
        name: 'category',
        params: {
          id: this.article.category_id
        },
        query: {
          title: this.category.title
        }
      }
    },
    async setDefault() {
      const response = await apiPutHomeArticle({id: this.articleID})
      this.$store.dispatch('changeTipsMsg', response.data.msg)
    },
    turnToArticle(articleID) {
      return {
        name: 'article',
        params: {
          id: articleID
        }
      }
    },
  },
}
</script>

<style scoped>
@media (max-width: 800px) {
  .article-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 13px;
    letter-spacing: 1px;
    color: #999;
    margin-bottom: 20px;
  }
}
@media (min-width: 800px) {
  .article-info {
    display: flex;
    justify-content: left;
    align-content: center;
    font-size: 13px;
    letter-spacing: 1px;
    color: #999;
    margin-bottom: 20px;
  }
}
.set-default {
  width: 200px;
  margin-bottom: 20px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  cursor: pointer;
}
.set-default:hover {
  background-color: #2d8cf0;
  color: #fff;
}
.article-title {
  margin-bottom: 20px;
  text-align: left;
  font-size: 30px;
  font-weight: 300;
  color: #333;
}

.article-content {
  text-align: left;
}
.article-category {
  color: #2d8cf0;
}
.article-original {
  text-align: left;
}
.article-original-more {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  color: #24292e;
}
.article-original-route {
  font-size: 15px;
  color: #2d8cf0;
}
.divHidden {
  display: none;
}
.homeClass {
  height: 1650px;
  overflow: hidden;
}
</style>