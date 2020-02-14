<template>
  <div class="main">
    <div class="main-content hideClass">
      <ShowArticle :isHome="true"/>
    </div>
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
}
</style>