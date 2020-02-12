<template>
  <div class="main">
    <div class="main-content">
      <ShowArticle :articleID="Number(this.$route.params.id)"/>
    </div>
    <div class="main-intro">
      <Intro/>
    </div>
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
.main-content {
  width: 75%;
}
.main-intro {
  width: 24%;
}
</style>