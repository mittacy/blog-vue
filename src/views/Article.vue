<template>
  <div class="content">
    <div class="article">
    </div>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro'
export default {
  components: {
    Intro,
  },
}
</script>

<style scoped>
.content {
  display: flex;
  width: 1140px;
  margin: 0 auto;
  padding-top: 20px;
}
.article {
  width: 75%;
  opacity: 1;
  transition: all .2s ease;
}
</style>