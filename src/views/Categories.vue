<template>
<div class="main">
  <div class="main-content">
    <Catelist/>
  </div>
  <div class="main-intro">
    <Intro/>
  </div>
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