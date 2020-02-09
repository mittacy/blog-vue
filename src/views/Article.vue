<template>
  <div class="content">
    <div class="article">
      <div class="article-title">{{article.title}}</div>
      <div class="article-info">
        <div style="marginRight: 4px">发表: {{article.created_at}} -</div>
        <div style="marginRight: 4px" :class="{divHidden: article.updated_at == ''}">最后修改: {{article.updated_at === '' ? article.updated_at : article.created_at}} - </div>
        <div>归类于: 
          <router-link class="article-category" :to="turnToCategory(article.category_id)">{{category.title}}</router-link>
        </div>
      </div>
      <div class="article-content markdown-body" v-html="article.content">
        {{article.content}}
      </div>
    </div>
    <Intro/>
  </div>
</template>

<script>
import '@/assets/css/github-markdown.css'
import Intro from '@/components/Intro'
import {apiGetArticle, apiGetCategoryTitle} from '@/request/api'
export default {
  data() {
    return {
      article: {},
      category: {}
    }
  },
  async created() {
    await this.initArticle()
    let md = require('markdown-it')()
    this.article.content = md.render(this.article.content)
  },
  components: {
    Intro,
  },
  methods: {
    async initArticle() {
      let response = await apiGetArticle(this.$route.params.id)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', '加载文章失败')
        return
      }
      this.article = response.data.data
      response = await apiGetCategoryTitle(this.article.category_id)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        return
      }
      this.category = response.data.data
      return
    },
    turnToCategory(id) {
      return {
        name: 'category',
        params: {
          id
        }
      }
    }
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
.article {
  width: 75%;
}
.article-title {
  margin-bottom: 20px;
  text-align: left;
  font-size: 30px;
  font-weight: 300;
  color: #333;
}
.article-info {
  display: flex;
  justify-content: left;
  align-content: center;
  font-size: 13px;
  letter-spacing: 1px;
  color: #999;
  margin-bottom: 20px;
}
.article-content {
  text-align: left;
}
.article-category {
  color: #2d8cf0;
}

.divHidden {
  display: none;
}
</style>