<template>
  <div class="content">
    <div class="home"></div>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro';
import Articlelist from '@/components/Articlelist';
export default {
  components: {
    Articlelist,
    Intro
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