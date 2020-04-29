<template>
<div class="edit">
  <div class="edit-title">{{title}}</div>
  <div class="edit-cap">信息</div>
  <div class="edit-cap-main">
    <div class="edit-cap-edit">
      <div class="edit-cap-title">
        <div class="edit-text">Title</div>
        <input class="edit-cap-title-input" type="text" v-model="article.title" placeholder="文章标题">
      </div>
      <div class="edit-cap-category">
        <div class="edit-text">Category</div>
        <select class="edit-cap-category-select" v-model="article.category_id">
          <option value="" disabled>分类</option>
          <option v-for="cate in categories" :key="cate.title" :value="cate.id">{{cate.title}}</option>
        </select>
      </div>
      <div class="edit-cap-content">
        <div class="edit-text">Content</div>
        <textarea class="edit-cap-content-input" v-model="article.content" placeholder="文章内容"></textarea>
      </div>
      <div class="edit-cap-button" :class="{divHidden: !isAddArticle}" @click="addArticle">创建</div>
      <div class="edit-cap-button" :class="{divHidden: isAddArticle}" @click="putArticle">修改</div>
    </div>
    <div class="edit-cap-view markdown-body" v-html="md.render(article.content)">
      {{md.render(article.content)}}
    </div>
  </div>
</div>
</template>

<script>
import {apiGetCategories, apiAddArticle, apiGetArticle, apiPutArticle} from '@/request/api'
export default {
  data () {
    return {
      isAddArticle: true,
      title: '',
      article: {
        content: ''
      },
      categories: [],
      content: '',
      md: require('markdown-it')()
    }
  },
  created() {
    if (this.$route.query.id) {
      this.isAddArticle = false
      this.title = '修改文章'
      this.article.id = this.$route.query.id
    } else {
      this.isAddArticle = true
      this.title = '添加文章'
    }
    this.initPage()
  },
  methods: {
    async initPage() {
      let response = await apiGetCategories()
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', "加载分类失败")
        return
      }
      this.categories = response.data.data
      if (!this.isAddArticle) {
        response = await apiGetArticle(this.article.id)
        if (response.status != 200) {
          this.$store.dispatch('changeTipsMsg', "加载文章失败")
          return
        }
        this.article = response.data.data
      }
    },
    async addArticle() {
      // 检查是否有空值
      if (!this.article.title || !this.article.category_id || !this.article.content) {
        this.$store.dispatch('changeTipsMsg', "检查空值")
        return
      }
      // 添加文章日期
      this.article.created_at = this.getNowFormatDate()
      const response = await apiAddArticle(this.article)
      this.$store.dispatch('changeTipsMsg', response.data.msg)
      if (response.status == 200) {
        this.$store.dispatch('changeActiveItem', '/articles')
        this.$router.push({
          name: 'articles'
        })
      }
    },
    async putArticle() {
      // 检查是否有空值
      if (!this.article.title || !this.article.category_id || !this.article.content) {
        this.$store.dispatch('changeTipsMsg', "检查空值")
        return
      }
      // 修改文章日期
      this.article.updated_at = this.getNowFormatDate()
      const response = await apiPutArticle(this.article)
      this.$store.dispatch('changeTipsMsg', response.data.msg)
      if (response.status == 200) {
        this.$router.push({
          name: 'article',
          params: {
            id: this.article.id
          }
        })
      }
    },
    getNowFormatDate() {
      const date = new Date()
      const seperator1 = "-"
      const year = date.getFullYear()
      let month = date.getMonth() + 1;
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      const currentdate = year + seperator1 + month + seperator1 + strDate
      return currentdate
    }
  }
}
</script>

<style scoped>
.edit-title {
  display: flex;
  justify-content: flex-start;
  font-size: 2.8em;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
}
.edit-cap {
  text-align: left;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
  margin-top: 20px;
}
.edit-cap-title,
.edit-cap-category {
  display: flex;
  align-content: center;
  height: 30px;
  margin-top: 20px;
}
.edit-cap-main {
  display: flex;
}
.edit-cap-edit {
  width: 50%;
}
.edit-cap-view {
  width: 50%;
  text-align: left;
  margin-top: 20px;
}
.edit-text {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
}
.edit-cap-title-input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin-left: 30px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 14px;
}
.edit-cap-title-input:focus {
  border: 1px solid #2d8cf0;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
}
.edit-cap-category-select {
  margin-left: 20px;
  font-size: 15px;
}
.edit-cap-category-select:hover {
  cursor: pointer;
}
.edit-cap-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}
.edit-cap-content-input {
  width: 90%;
  height: 500px;
  margin-top: 10px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
}
.edit-cap-button {
  width: 200px;
  margin-top: 20px;
  margin-left: 0;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #2d8cf0;
  border: 1px solid #2d8cf0;
  border-radius: 4px;
  cursor: pointer;
}
.edit-cap-button:hover {
  background-color: #2d8cf0;
  color: #fff;
}
.divHidden {
  display: none;
}
</style>