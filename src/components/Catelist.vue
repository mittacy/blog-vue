<template>
  <div class="cate">
    <div class="cate-lists">
      <router-link v-for="cate in categories" :key="cate.title" class="cate-list" :to="turnToCategory(cate.id, cate.title)">
        <div class="cate-list-left">
          <i class="iconfont icon-biaoqian"></i>
          {{ cate.title }}
        </div>
        <div class="cate-list-right">
          <div class="cate-list-text">{{ cate.article_count }}篇</div>
          <router-link class="cate-list-edit" :class="{divHidden: !$store.state.adminStatus}" :to="{name:'cateEdit', params:{id: cate.id, title: cate.title}}">编辑</router-link>
          <div class="cate-list-delete" :class="{divHidden: (!$store.state.adminStatus || cate.article_count>0)}" @click.prevent="deleteCategory(cate.id)">删除</div>
        </div>
      </router-link>
    </div>
    <Page :listNums="cateNumber"/>
  </div>
</template>

<script>
import {apiGetCategoriesByPage, apiDeleteCategory} from '@/request/api';
import Page from '@/components/Page'
export default {
  data () {
    return {
      categories: [],
      cateNumber: 0,
    }
  },
  components: {
    Page
  },
  created () {
    this.initCategory()
  },
  methods: {
    async initCategory() {
      const response = await apiGetCategoriesByPage(0)
      if (response.status != 200) {
        return
      }
      const result = response.data.data
      this.categories = result.categories
      this.cateNumber = result.categoryCount
    },
    async changePage(page) {
      if (page === this.currentPage) return
      const response = await apiGetCategoriesByPage(page)
      if (response.status != 200) {
        this.$store.dispatch('changeTipsMsg', msg)
        return
      }
      this.categories = response.data.data.categories
    },
    async deleteCategory(cateID) {
      if(confirm("确实要删除？")) {
        const response = await apiDeleteCategory({id: cateID})
        this.$store.dispatch('changeTipsMsg', response.data.msg)
        if (response.status == 200) { 
          this.initCategory()
        }
      }
    },
    turnToCategory(cateID, cateTitle) {
      return {
        name: 'category',
        params: {
          id: cateID
        },
        query: {
          title: cateTitle
        }
      }
    }
  },
  computed: {
    listPage() {
      return this.$store.state.page
    }
  },
  watch: {
    listPage() {
      this.changePage(this.listPage)
    }
  }
}
</script>

<style scoped>
.cate-lists {
  display: flex;
  flex-direction: column;
}
.cate-list {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
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
.cate-list a {
  color: #17233d;
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
  display: flex;
  flex-direction: row-reverse;
  position: relative;
}
.cate-list-left>i {
  margin-right: 7px;
}
.cate-list-text,
.cate-list-edit,
.cate-list-delete {
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-right: 5px;
  border: 1px solid #e8eaec;
  border-radius: 4px;
  transition: all 0.2s ease-in;
}
.cate-list-text {
  border: none;
}
.cate-list-delete:hover {
  color: #fff;
  background-color: red;
}
.cate-list-edit:hover {
  color: #fff;
  background-color: #2d8cf0;
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
.divHidden {
  display: none;
}
</style>