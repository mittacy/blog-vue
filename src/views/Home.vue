<template>
  <div class="content">
    <ShowArticle :isHome="true"/>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import Articlelist from '@/components/Articlelist'
import ShowArticle from '@/components/ShowArticle'
export default {
  data() {
    return {
      defaultArticleID: 0
    }
  },
  components: {
    Articlelist,
    Intro,
    ShowArticle
  },
}
</script>

<style scoped>
.content {
  display: flex;
  width: 1140px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  padding-top: 20px;
}
.home {
  width: 75%;
}
</style>