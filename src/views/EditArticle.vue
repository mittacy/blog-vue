<template>
<div class="content">
  <div class="edit" :class="{Hidden: editCate}">
    <div class="edit-caps">添加分类</div>
    <div class="edit-cap">
      <div class="edit-cap-title">title</div>
      <input class="edit-cap-input" type="text" v-model="category.title">
      <div class="edit-cap-button" @click="editCategory">确认</div>
    </div>
  </div>
  <div class="edit" :class="{Hidden: !editCate}">
    <div class="edit-caps">修改分类名字</div>
    <div class="edit-cap">
      <div class="edit-cap-title">title</div>
      <input class="edit-cap-input" type="text" v-model="category.title">
      <div class="edit-cap-button" @click="editCategory">确认</div>
    </div>
  </div>
</div>
</template>

<script>
import {apiAddCategory, apiPutCategory} from '@/request/api'
export default {
  data () {
    return {
      category: {
        'id': 0,
        'title': ''
      },
      editCate: false
    }
  },
  props: {
    categoryID: {
      type: Number,
      default: -1
    }
  },
  created() {
    if (this.categoryID != -1) {
      this.category.id = this.categoryID
      this.editCate = true
    }
    console.log('this.categoryID -> ', this.categoryID)
    console.log('this.category.id -> ', this.category.id)
  },
  methods: {
    async editCategory() {
      if (this.category.title == '') {
        this.$store.dispatch('changeTipsMsg', '不能为空')
        return
      }
      let response = {}
      if (this.editCate) {
        response = await apiAddCategory(this.category)
      } else {
        response = await apiPutCategory(this.category)
      }
      if (response.status == 200) {
        this.$store.dispatch('changeTipsMsg', '成功')
        this.$router.push({
          name: 'categories'
        })
        return
      }
      this.$store.dispatch('changeTipsMsg', response.data.msg)
    },
  }
}
</script>

<style scoped>
.content {
  position: relative;
  display: flex;
  width: 1140px;
  margin: 0 auto;
  padding-top: 20px;
}
.edit {
  width: 100%;
}
.Hidden {
  display: none!important;
}
.edit-text {
  width: 100px;
  display: flex;
}
.edit-caps {
  display: flex;
  justify-content: flex-start;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 10px;
  margin-top: 20px;
}
.edit-cap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.edit-cap-input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin-left: 30px;
  border: 1px solid #eaecef;
  border-radius: 4px;
  padding-left: 5px;
  font-size: 14px;
}
.edit-cap-input:focus {
  border: 1px solid #2d8cf0;
  box-shadow: 0 1px 3px rgba(0,0,0,.15);
}
.edit-cap-button {
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
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
</style>