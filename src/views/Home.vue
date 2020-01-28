<template>
  <div class="home">
    <div class="home-list"></div>
    <Intro/>
  </div>
</template>

<script>
import Intro from '@/components/Intro';

export default {
  components: {
    Intro
  }
}
</script>

<style scoped>
.home {
  display: -webkit-box;
  display: flex;
  width: 1140px;
  margin: 0 auto;
  
}
.home-list {
  width: 75%;
  background-color: beige;
}
</style>