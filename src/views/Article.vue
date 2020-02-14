<template>
  <div class="main">
    <div class="main-content">
      <ShowArticle :articleID="Number(this.$route.params.id)"/>
    </div>
    <Intro class="divHide"/>
  </div>
</template>

<script>
import ShowArticle from '@/components/ShowArticle'
import Intro from '@/components/Intro'
export default {
  components: {
    ShowArticle,
    Intro,
  },
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 800px) {
  .divHide {
    display: none;
  }
  .main-content {
    width: 100%;
  }
}
@media (min-width: 800px) {
  .main-content {
    width: calc(100% - 292px);
  }
}
</style>