<template>
<div class="main">
  <div class="main-content">
    <Articlelist/>
  </div>
  <Intro class="divHide"/>
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
  created() {
    if (this.$store.state.activeItem != '/articles') {
      this.$store.dispatch('changeActiveItem', '/articles')
    }
  }
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