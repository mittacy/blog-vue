<template>
<div class="content">
  <Catelist  :class="{hidden: !showCate}" @turnCategoryID="showArticle"/>
  <Articlelist :class="{hidden: showCate}" :categoryID="categoryID"/>
  <Intro/>
</div>
</template>

<script>
import Intro from '@/components/Intro';
import Catelist from '@/components/Catelist';
import Articlelist from '@/components/Articlelist';
export default {
  data () {
    return {
      showCate: true,
      categoryID: 0
    }
  },
  components: {
    Intro,
    Catelist,
    Articlelist
  },
  methods: {
    showArticle(id) {
      this.categoryID = id
      this.showCate = false
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
.hidden {
  /* opacity: 0; */
  display: none;
}
</style>