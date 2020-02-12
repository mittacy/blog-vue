<template>
  <div class="main">
    <div class="main-content">
      <ShowArticle :isHome="true"/>
    </div>
    <div class="main-intro">
      <Intro/>
    </div>
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
.main {
  display: flex;
  justify-content: space-between;
}
.main-content {
  width: 75%;
}
.main-intro {
  width: 24%;
}
</style>