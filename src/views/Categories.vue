<template>
<div class="main">
  <div class="main-content">
    <Catelist/>
  </div>
  <Intro class="divHide"/>
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
  created() {
    if (this.$store.state.activeItem != '/categories') {
      this.$store.dispatch('changeActiveItem', '/categories')
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