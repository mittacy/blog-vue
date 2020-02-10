<template>
  <div class="content">
    <ShowArticle :articleID="defaultArticleID"/>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro';
import Articlelist from '@/components/Articlelist';
import ShowArticle from '@/components/ShowArticle'
export default {
  data() {
    return {
      defaultArticleID: 8
    }
  },
  components: {
    Articlelist,
    Intro,
    ShowArticle
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
.home {
  width: 75%;
}
</style>