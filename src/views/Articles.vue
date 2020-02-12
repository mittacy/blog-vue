<template>
  <div class="content">
    <Articlelist/>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro';
import Articlelist from '@/components/Articlelist';
export default {
  components: {
    Intro,
    Articlelist
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
</style>