<template>
<div class="content">
  <Catelist/>
  <Intro/>
</div>
</template>

<script>
import Intro from '@/components/Intro'
import Catelist from '@/components/Catelist'
export default {
  components: {
    Intro,
    Catelist,
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