<template>
  <div class="content">
    <ShowArticle :articleID="Number(this.$route.params.id)"/>
    <Intro/>
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
.content {
  display: flex;
  width: 1140px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;
  padding-top: 20px;
}
.article {
  width: 75%;
}
.article-title {
  margin-bottom: 20px;
  text-align: left;
  font-size: 30px;
  font-weight: 300;
  color: #333;
}
.article-info {
  display: flex;
  justify-content: left;
  align-content: center;
  font-size: 13px;
  letter-spacing: 1px;
  color: #999;
  margin-bottom: 20px;
}
.article-content {
  text-align: left;
}
.article-category {
  color: #2d8cf0;
}

.divHidden {
  display: none;
}
</style>